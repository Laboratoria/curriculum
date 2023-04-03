import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Challenges, loadFromLocalStorage } from '@laboratoria/react';
import Breadcrumbs from '../Breadcrumbs';
import Content from '../Content';

const Part = ({ lang, topic }) => {
  const params = useParams();
  const unit = topic.units.find(({ slug }) => slug === params.unit);
  const part = unit.parts.find(({ slug }) => slug === params.part);
  const challenges = part.challenges?.map((challenge) => {
    const pathPrefix = `${topic.slug}/${unit.slug}/${part.slug}`;
    const path = `${pathPrefix}/${challenge.slug}/${topic.version}`;
    return {
      ...challenge,
      lastActivityLog: {
        data: loadFromLocalStorage(path),
      },
    };
  });

  return (
    <>
      <Breadcrumbs topic={topic} />
      <Typography variant="h1">{part.intl[lang].title}</Typography>
      <Content html={part.intl[lang].body} />
      {!!challenges?.length && (
        <Challenges challenges={challenges} lang={lang} />
      )}
    </>
  );
};

export default Part;