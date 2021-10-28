import { useEffect, useState } from 'react';
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Loading from '../Loading';
import Breadcrumbs from '../Breadcrumbs';
import Exercise from '../Exercise';
import Part from '../Part';
import data from '../../lib/data';

const Unit = ({ topic, url }) => {
  const params = useParams();
  const unit = topic.syllabus[params.unit];

  return (
    <>
      <Breadcrumbs topic={topic} />
      <Typography variant="h2">{unit.title}</Typography>
      {Object.keys(unit.parts).map(key => (
        <div key={key}>
          <Link to={`${url}/${params.unit}/${key}`}>
            {unit.parts[key].title}
          </Link>
        </div>
      ))}
    </>
  );
};

const UnitsList = ({ topic, url }) => (
  <>
    <Breadcrumbs topic={topic} />
    <Typography variant="h2">{topic.title}</Typography>
    {Object.keys(topic.syllabus).map(key => (
      <div key={key}>
        <Link to={`${url}/${key}`}>
          <Typography variant="h3">{topic.syllabus[key].title}</Typography>
        </Link>
        {Object.keys(topic.syllabus[key].parts).map(partKey => (
          <div key={`${key}-${partKey}`}>
            <Link to={`${url}/${key}/${partKey}`}>
              {topic.syllabus[key].parts[partKey].title}
            </Link>
          </div>
        ))}
      </div>
    ))}
  </>
);

const Topic = () => {
  let { path, url } = useRouteMatch();
  const { lang, slug } = useParams();
  const [topic, setTopic] = useState();

  useEffect(() => {
    const id = `topics/${slug}${lang !== 'es' ? '-pt' : ''}`;
    data.subscribe(id, setTopic);
    return () => {
      data.unsubscribe(id, setTopic);
    };
  }, [lang, slug]);

  if (!topic) {
    return <Loading />;
  }

  return (
    <Container>
      <Switch>
        <Route path={`${path}/:unit/:part/:exerciseid`}>
          <Exercise topic={topic} />
        </Route>
        <Route path={`${path}/:unit/:part`}>
          <Part topic={topic} />
        </Route>
        <Route path={`${path}/:unit`}>
          <Unit topic={topic} url={url} />
        </Route>
        <Route exact path={path}>
          <UnitsList topic={topic} url={url} />
        </Route>
      </Switch>
    </Container>
  );
};

export default Topic;