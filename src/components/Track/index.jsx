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
import { Loading, setPage } from '@laboratoria/sdk-react';
import data from '../../lib/data';
import Gym from './Gym';
import Projects from './Projects';
import Topics from './Topics';

const Track = () => {
  const location = useLocation();
  const { lang, track } = useParams();
  const { pathnameBase } = useMatch('/:lang/:track/*');
  const [learningObjectives, setLearningObjectives] = useState();
  const [projects, setProjects] = useState();
  const [topics, setTopics] = useState();
  const { formatMessage } = useIntl();
  const trackNameIntl = formatMessage({id: track === 'web-dev' ? 'webDev' : 'ux'});
  // en este componente el `title` dependerá de en qué tab esté
  // posicionada la usuaria, en caso de que el último string luego de
  // los slashes (/) en location y pathname sea igual, quiere decir que
  // están posicionadas en el tab 'proyectos' y ese será el id para pasar a la
  // función formatMessage, si no, entonces el id será igual al último
  // string luego de los slashes (/) en location.pathname
  const tabTitle = formatMessage({
    id: location.pathname.split('/').at(-1) === pathnameBase.split('/').at(-1) ? 'projects' : location.pathname.split('/').at(-1)
  });
  setPage({title: `${trackNameIntl} - ${tabTitle}`, description: ''});

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
      <Container data-testid="ux-pt-container">
        {heading}
        <p>
          Este conteúdo não está disponível atualmente em português.
        </p>
      </Container>
    );
  }

  return (
    <Container data-testid="webDev-container">
      {heading}
      <Tabs value={location.pathname} sx={{ mb: 3 }}>
        <Tab
          label={formatMessage({ id: 'projects' })}
          value={pathnameBase}
          component={Link}
          to=""
        />
        <Tab
          data-testid="topics"
          label={formatMessage({ id: 'topics' })}
          value={`${pathnameBase}/topics`}
          component={Link}
          to={`topics`}
        />
        {track === 'web-dev' && (
          <Tab
            label={formatMessage({ id: 'gym' })}
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
            element={<Gym lang={lang} intl={formatMessage} />}
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

