import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import data from '../../lib/data';
import Loading from '../Loading';
import Projects from './Projects';
import Topics from './Topics';

const Track = () => {
  const { track } = useParams();
  const [learningObjectives, setLearningObjectives] = useState();
  const [projects, setProjects] = useState();
  const [topics, setTopics] = useState();

  useEffect(() => {
    data.subscribe('learning-objectives', setLearningObjectives);
    data.subscribe('projects', setProjects);
    data.subscribe('topics', setTopics);

    return () => {
      data.unsubscribe('learning-objectives', setLearningObjectives);
      data.unsubscribe('projects', setProjects);
      data.unsubscribe('topics', setTopics);
    };
  }, []);

  if (!learningObjectives || !projects || !topics) {
    return <Loading />;
  }

  return (
    <Container>
      <Typography variant="h1">
        <FormattedMessage id={track === 'js' ? 'webDev' : 'ux'} />
      </Typography>
      <Projects projects={projects} track={track} />
      <Topics topics={topics} track={track} />
    </Container>
  )
};

export default Track;