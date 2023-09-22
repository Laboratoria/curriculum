import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Loading, Challenge, setPage } from '@laboratoria/react';
import data from '../../lib/data';
import Breadcrumbs from '../Breadcrumbs';
import Part from '../Part';

const Unit = ({ topic, lang }) => {
  const params = useParams();
  const unit = topic.units.find(({ slug }) => slug === params.unit);

  return (
    <>
      <Breadcrumbs topic={topic} />
      <Typography variant="h2">{unit.intl[lang].title}</Typography>
      {unit.parts.map((part) => (
        <div key={part.slug}>
          <Link to={`${part.slug}`}>{part.intl[lang].title}</Link>
        </div>
      ))}
    </>
  );
};

const UnitsList = ({ topic, lang }) => (
  <>
    <Breadcrumbs topic={topic} />
    <Typography variant="h2">{topic.intl[lang].title}</Typography>
    <Typography variant="body1" component="div">
      <div dangerouslySetInnerHTML={{ __html: topic.summary }}></div>
    </Typography>
    {topic.units.map((unit, _, arr) => (
      <div key={unit.slug}>
        {arr.length > 1 && (
          <Link to={`${unit.slug}`}>
            <Typography variant="h3">{unit.intl[lang].title}</Typography>
          </Link>
        )}
        {unit.parts.map((part) => (
          <div key={`${unit.slug}-${part.slug}`}>
            <Link to={`${unit.slug}/${part.slug}`}>
              {part.intl[lang].title}
            </Link>
          </div>
        ))}
      </div>
    ))}
  </>
);

const ChallengeRoute = ({ topic, lang }) => {
  const params = useParams();
  const unit = topic.units.find(({ slug }) => slug === params.unit);
  const part = unit.parts.find(({ slug }) => slug === params.part);
  const challenge = part.challenges.find(
    ({ slug }) => slug === params.challengeid,
  );
  const { formatMessage } = useIntl();
  setPage({
    title: `${challenge.intl[lang].title} - ${formatMessage({
      id: topic.slug,
    })} - ${formatMessage({
      id: 'app-title',
    })}`,
    description: '',
  });

  return (
    <Challenge
      challenge={{ ...challenge, version: topic.version }}
      lang={lang}
      pathPrefix={`${topic.slug}/${unit.slug}/${part.slug}`}
    />
  );
};

const Topic = () => {
  const { lang, slug } = useParams();
  const [topic, setTopic] = useState();
  const { formatMessage } = useIntl();
  const topicTitle = formatMessage({ id: slug });
  const pageTitle = `${formatMessage({ id: slug })} - ${formatMessage({
    id: 'app-title',
  })}`;
  // en el caso en que no exista un id = slug del tópico en nuestros archivos
  // de internacionalización (por ej. cuando un tópico existe en un lang, pero
  // en otro no), vamos a dejar como `title` el título general del sitio.
  setPage(
    topicTitle !== slug
      ? { title: pageTitle, description: '' }
      : { title: formatMessage({ id: 'app-title' }), description: '' },
  );

  useEffect(() => {
    const id = `topics/${slug}`;
    data.subscribe(id, setTopic);
    return () => {
      data.unsubscribe(id, setTopic);
    };
  }, [lang, slug]);

  if (!topic) {
    return <Loading />;
  }

  if (!topic.intl[lang]) {
    return (
      <Container>
        <FormattedMessage id="not-available-in-lang" />
      </Container>
    );
  }

  return (
    <Container>
      <Routes>
        <Route
          path=":unit/:part/:challengeid/*"
          element={<ChallengeRoute topic={topic} lang={lang} />}
        />
        <Route
          path=":unit/:part"
          element={<Part topic={topic} lang={lang} />}
        />
        <Route path=":unit" element={<Unit topic={topic} lang={lang} />} />
        <Route path="" element={<UnitsList topic={topic} lang={lang} />} />
      </Routes>
    </Container>
  );
};

export default Topic;
