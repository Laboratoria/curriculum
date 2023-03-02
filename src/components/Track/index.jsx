import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  Link,
  Navigate,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Loading } from '@laboratoria/react';
import data from '../../lib/data';
import Gym from './Gym';
import Projects from './Projects';
import Topics from './Topics';

const Track = () => {
  const location = useLocation();
  const { lang, track } = useParams();
  const { pathnameBase } = useMatch('/:lang/:track/*');
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

  if (!['web-dev', 'ux'].includes(track)) {
    return <Navigate to="/" />;
  }

  const heading = (
    <Typography variant="h1">
      <FormattedMessage id={track === 'web-dev' ? 'webDev' : 'ux'} />
    </Typography>
  );

  if (track === 'ux' && lang === 'pt') {
    return (
      <Container>
        {heading}
        <p>
          Este conteúdo não está disponível atualmente em português.
        </p>
      </Container>
    );
  }

  return (
    <Container>
      {heading}
      <Tabs value={location.pathname} sx={{ mb: 3 }}>
        <Tab
          label={intl.formatMessage({ id: 'projects' })}
          value={pathnameBase}
          component={Link}
          to=""
        />
        <Tab
          label={intl.formatMessage({ id: 'topics' })}
          value={`${pathnameBase}/topics`}
          component={Link}
          to={`topics`}
        />
        {track === 'web-dev' && (
          <Tab
            label={intl.formatMessage({ id: 'gym' })}
            value={`${pathnameBase}/gym`}
            component={Link}
            to={`gym`}
          />
        )}
      </Tabs>
      <Routes>
        <Route
          path={`topics`}
          element={<Topics topics={topics} track={track} lang={lang} />}
        />
        {track === 'web-dev' && (
          <Route
            path={`gym`}
            element={<Gym lang={lang} intl={intl} />}
          />
        )}
        <Route
          path=""
          element={<Projects projects={projects} track={track} lang={lang} />}
        />
      </Routes>
    </Container>
  )
};

export default Track;