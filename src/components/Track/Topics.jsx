import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions  from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { useLocale } from '../../intl/IntlProvider';


const truncateText = (stringToTruncate, charactersQuantity, wordBoundary) => {
  if (stringToTruncate.length <= charactersQuantity) { return stringToTruncate; }
  const subString = stringToTruncate.substr(0, charactersQuantity-1);
  return (wordBoundary
    ? subString.substr(0, subString.lastIndexOf(" "))
    : subString) + " &hellip;";
}

const Topic = ({ topic }) => {
  const [description, setDescription] = useState(truncateText(topic.description, 250, new RegExp('\w')));
  const [dropArrow, setDropArrow] = useState(true);
  const toggleShowEntireDescription = () => {
    dropArrow ?
      setDescription(topic.description) :
      setDescription(truncateText(topic.description, 250, new RegExp('\w')));
    setDropArrow(!dropArrow);
  }
  const { lang } = useParams();
  return (
    <Card>
        <CardMedia
          component="img"
          height="200"
          image={topic.thumb}
          alt={topic.title}
        />
      <CardHeader
        action={
          <IconButton component={Link} to={`/${lang}/topics/${topic.slug}`}>
            <ArrowForward />
          </IconButton>
        }
        title={topic.title}
      />
      <Typography variant='body2'>
        <CardContent>
            <div dangerouslySetInnerHTML={{ __html: description }}>
            </div>
            <CardActions style={{marginLeft: "80%"}}>
              <IconButton onClick={() => toggleShowEntireDescription()}>
                { dropArrow ? <ArrowDropDownIcon /> : <ArrowDropUpIcon /> }
              </IconButton>
            </CardActions>
        </CardContent>
      </Typography>
        
    </Card>
  );
};

const Topics = ({ topics, track }) => {
  const { locale } = useLocale();
  const filteredTopics = topics
    .map(t => ({ ...t, slug: /-pt/.test(t.slug) ? t.slug.slice(0, -3) : t.slug }))
    .filter(t => t.track === track && t.locale === locale);
  const jsTopicIdx = filteredTopics.findIndex(({ slug }) => slug === 'javascript');
  if (jsTopicIdx >= 0) {
    const jsTopic = filteredTopics[jsTopicIdx];
    filteredTopics.splice(jsTopicIdx, 1);
    filteredTopics.unshift(jsTopic);
  }
  return (
    <div>
      <Typography variant="h2">
        <FormattedMessage id="topics" />
      </Typography>
      <Grid container spacing={3}>
        {filteredTopics.map(topic => (
          <Grid key={topic.slug} item xs={12} sm={6} md={4} lg={3}>
            <Topic topic={topic} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
};

export default Topics;