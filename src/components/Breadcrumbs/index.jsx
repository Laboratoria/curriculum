import { useParams, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Box from '@mui/material/Box';
import { removePrefixIfNumber } from '../Part';

const Breadcrumbs = ({ topic, project }) => {
  const { lang, slug, exerciseid } = useParams();
  // Luego de un cambio de versión, los slugs de las unidades y partes
  // dejaron de utilizar un prefijo numérico, para que no arroje error
  // se las removemos. Ejemplo: 01-intro-a-js -> intro-a-js
  const unit = removePrefixIfNumber(useParams().unit);
  const part = removePrefixIfNumber(useParams().part);
  const track = topic ? topic.track : project.track;

  const links = [
    {
      title: <FormattedMessage id="home" />,
      url: `/${lang}`,
    },
    {
      title: <FormattedMessage id={track === 'web-dev' ? 'webDev' : 'ux'} />,
      url: `/${lang}/${track}`,
    },
    {
      title: topic ? 'Tópicos' : 'Proyectos',
      url: `/${lang}/${track}${topic ? '/topics' : ''}`,
    },
  ];

  if (slug) {
    links.push({
      title: topic ? topic.intl[lang].title : project.intl[lang].title,
      url: `/${lang}/${topic ? 'topics' : 'projects'}/${slug}`,
    });

    if (topic && unit) {
      const unitObj = topic.units.find(({ slug }) => slug === unit);
      if (topic.units.length > 1) {
        links.push({
          title: unitObj.intl[lang].title,
          url: `/${lang}/topics/${slug}/${unit}`,
        });
      }

      if (part) {
        const partObj = unitObj.parts.find(({ slug }) => slug === part);
        links.push({
          title: partObj.intl[lang].title,
          url: `/${lang}/topics/${slug}/${unit}/${part}`,
        });
        if (exerciseid) {
          const challenge = partObj.challenges.find(({ slug }) => slug === exerciseid);
          links.push({
            title: challenge.intl[lang].title,
            url: `/${lang}/topics/${slug}/${unit}/${part}/${exerciseid}`,
          });
        }
      }
    }
  }

  return (
    <Box sx={{ mb: 3, fontSize: '0.9em' }}>
      {links.map(({ title, url }, idx) => (
        <span key={`${url}-${idx}`}>
          {idx > 0 && <Box sx={{ display: 'inline-block', px: 1 }}>»</Box>}
          <Link to={url}>{title}</Link>
        </span>
      ))}
    </Box>
  );
};

export default Breadcrumbs;
