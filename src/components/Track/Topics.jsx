import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
  Paper,
  IconButton,
  Typography } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const truncate = (str, limit) => {
  if (str.length <= limit) {
    return str;
  }

  const chunk = str.substr(0, limit - 1);
  return `${chunk.substr(0, chunk.lastIndexOf(' '))} &hellip;`;
};

const Topic = ({ lang, topic }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { title, summary } = topic.intl[lang];

  const toggleShowEntireDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Paper elevation={3}>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={topic.thumb}
          alt={title}
        />
        <CardHeader
          action={
            <IconButton component={Link} to={`/${lang}/topics/${topic.slug}`} size="large">
              <ArrowForward />
            </IconButton>
          }
          title={title}
        />
        <Typography component='div' variant='body2'>
          <CardContent>
            <div
              dangerouslySetInnerHTML={{
                __html: showFullDescription ? summary : truncate(summary, 250),
              }}
            ></div>
            {summary?.length > 250 && (
              <CardActions style={{ marginLeft: "80%" }}>
                <IconButton onClick={() => toggleShowEntireDescription()} size="large">
                  {showFullDescription
                    ? <ArrowDropUpIcon />
                    : <ArrowDropDownIcon />}
                </IconButton>
              </CardActions>
            )}
          </CardContent>
        </Typography>
      </Card>
    </Paper>
  );
};

const Topics = ({ lang, topics, track }) => {
  const filteredTopics = topics.filter(t => t.tracks.includes(track) && t.intl[lang]);
  const jsTopicIdx = filteredTopics.findIndex(({ slug }) => slug === 'javascript');
  if (jsTopicIdx >= 0) {
    const jsTopic = filteredTopics[jsTopicIdx];
    filteredTopics.splice(jsTopicIdx, 1);
    filteredTopics.unshift(jsTopic);
  }
  return (
    <>
      <Typography variant="h2">
        <FormattedMessage id="topics" />
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {filteredTopics.map(topic => (
          <Grid key={topic.slug} item xs={12} sm={6} md={4} lg={3}>
            <Topic topic={topic} lang={lang} />
          </Grid>
        ))}
      </Grid>
    </>
  )
};

export default Topics;