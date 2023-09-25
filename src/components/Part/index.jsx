import { useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import Typography from '@mui/material/Typography';
import {
  Challenges,
  Content,
  loadFromLocalStorage,
  setPage,
} from '@laboratoria/react';
import Breadcrumbs from '../Breadcrumbs';

export const removePrefixIfNumber = (str) => {
  if (!str) return str;
  const strArr = str.split('-');
  if (!isNaN(strArr[0])) {
    strArr.shift();
    str = strArr.join('-');
  }
  return str;
};

const Part = ({ lang, topic }) => {
  const params = useParams();
  let paramsUnit = removePrefixIfNumber(params.unit);
  let paramsPart = removePrefixIfNumber(params.part);
  const unit = topic.units.find(({ slug }) => slug === paramsUnit);
  const part = unit.parts.find(({ slug }) => slug === paramsPart);
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

  const { formatMessage } = useIntl();
  setPage({
    title: `${part.intl[lang].title} - ${formatMessage({
      id: topic.slug,
    })} - ${formatMessage({ id: 'app-title' })}`,
    description: '',
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
