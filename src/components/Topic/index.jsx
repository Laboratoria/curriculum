import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Loading from '../Loading';
import Breadcrumbs from '../Breadcrumbs';
import Exercise from '../Exercise';
import Part from '../Part';
import data from '../../lib/data';

const Unit = ({ topic }) => {
  const params = useParams();
  const unit = topic.syllabus[params.unit];

  return (
    <>
      <Breadcrumbs topic={topic} />
      <Typography variant="h2">{unit.title}</Typography>
      {Object.keys(unit.parts).map(key => (
        <div key={key}>
          <Link to={`${key}`}>
            {unit.parts[key].title}
          </Link>
        </div>
      ))}
    </>
  );
};

const UnitsList = ({ topic }) => (
  <>
    <Breadcrumbs topic={topic} />
    <Typography variant="h2">{topic.title}</Typography>
    <Typography variant="body1">
      <div dangerouslySetInnerHTML={{ __html: topic.description }}></div>
    </Typography>
    {Object.keys(topic.syllabus).map(key => (
      <div key={key}>
        <Link to={`${key}`}>
          <Typography variant="h3">{topic.syllabus[key].title}</Typography>
        </Link>
        {Object.keys(topic.syllabus[key].parts).map(partKey => (
          <div key={`${key}-${partKey}`}>
            <Link to={`${key}/${partKey}`}>
              {topic.syllabus[key].parts[partKey].title}
            </Link>
          </div>
        ))}
      </div>
    ))}
  </>
);

const Topic = () => {
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
      <Routes>
        <Route path=":unit/:part/:exerciseid/*" element={<Exercise topic={topic} />} />
        <Route path=":unit/:part" element={<Part topic={topic} />} />
        <Route path=":unit" element={<Unit topic={topic} />} />
        <Route path="" element={<UnitsList topic={topic} />} />
      </Routes>
    </Container>
  );
};

export default Topic;