import { useHistory, useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { useLocale } from '../../intl/IntlProvider';

const Topic = ({ topic }) => {
  const history = useHistory();
  const { lang } = useParams();
  return (
    <Card>
      <CardHeader
        action={
          <IconButton onClick={() => history.push(`/${lang}/topics/${topic.slug}`)}>
            <ArrowForward />
          </IconButton>
        }
        title={topic.title}
      />
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
  console.log(jsTopicIdx);
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