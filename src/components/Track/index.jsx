import { useEffect, useState } from 'react';
import {
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import data from '../../lib/data';
import Loading from '../Loading';
import Gym from './Gym';
import Projects from './Projects';
import Topics from './Topics';

const Track = () => {
  const { lang, track } = useParams();
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const intl = useIntl();
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
      <Tabs value={history.location.pathname}>
        <Tab
          label={intl.formatMessage({ id: 'projects' })}
          value={`${url}`}
          component={Link}
          to={url}
        />
        <Tab
          label={intl.formatMessage({ id: 'topics' })}
          value={`${url}/topics`}
          component={Link}
          to={`${url}/topics`}
        />
        {track === 'js' && (
          <Tab
            label={intl.formatMessage({ id: 'gym' })}
            value={`${url}/gym`}
            component={Link}
            to={`${url}/gym`}
          />
        )}
      </Tabs>
      <Switch>
        <Route
          path={`${path}/topics`}
          render={() => <Topics topics={topics} track={track} />}
        />
        {track === 'js' && (
          <Route
            path={`${path}/gym`}
            render={() => <Gym topics={topics} track={track} lang={lang} intl={intl} />}
          />
        )}
        <Route
          path={path}
          exact
          render={() => <Projects projects={projects} track={track} />}
        />
      </Switch>
    </Container>
  )
};

export default Track;