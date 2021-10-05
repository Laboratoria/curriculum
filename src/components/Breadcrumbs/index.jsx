import { useParams, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    fontSize: '0.9em',
  },
  separator: {
    display: 'inline-block',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  }
}));

const Breadcrumbs = ({ topic, project }) => {
  const classes = useStyles();
  const { lang, slug, unit, part, exerciseid } = useParams();
  const track = topic ? topic.track : project.track;

  const links = [
    {
      title: <FormattedMessage id="home" />,
      url: `/${lang}`,
    },
    {
      title: <FormattedMessage id={track === 'js' ? 'webDev' : 'ux'} />,
      url: `/${lang}/${track}`,
    },
    {
      title: topic ? 'Tópicos' : 'Proyectos',
      url: `/${lang}/${track}${topic ? '/topics' : ''}`,
    },
  ];

  if (slug) {
    links.push({
      title: topic ? topic.title : project.title,
      url: `/${lang}/${topic ? 'topics' : 'projects'}/${slug}`,
    });

    if (topic && unit) {
      links.push({
        title: topic.syllabus[unit].title,
        url: `/${lang}/${topic ? 'topics' : 'projects'}/${slug}/${unit}`,
      });

      if (part) {
        links.push({
          title: topic.syllabus[unit].parts[part].title,
          url: `/${lang}/${topic ? 'topics' : 'projects'}/${slug}/${unit}/${part}`,
        });
        if (exerciseid) {
          links.push({
            title: topic.syllabus[unit].parts[part].exercises[exerciseid].title,
            url: `/${lang}/${topic ? 'topics' : 'projects'}/${slug}/${unit}/${part}/${exerciseid}`,
          });
        }
      }
    }
  }

  return (
    <div className={classes.root}>
      {links.map(({ title, url }, idx) => (
        <span key={url}>
          {idx > 0 && (<span className={classes.separator}>»</span>)}
          <Link to={url}>{title}</Link>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;