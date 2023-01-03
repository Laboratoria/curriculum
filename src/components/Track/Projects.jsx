import { Link, useParams } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import makeStyles from '@mui/styles/makeStyles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useLocale } from '../../intl/IntlProvider';
import { learningObjectiveToIcon } from '../../lib/learning-objectives';

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    paddingBottom: 0,
  },
  cardContent: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const Project = ({ project }) => {
  const classes = useStyles();
  const { lang } = useParams();
  const learningObjectiveCats = (project.learningObjectives || []).reduce(
    (memo, item) => (
      !memo.includes(item.split('/')[0])
        ? memo.concat(item.split('/')[0])
        : memo
    ),
    [],
  );

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={project.thumb}
        alt={project.title}
      />
      <CardHeader
        className={classes.cardHeader}
        titleTypographyProps={{ style: { fontSize: '1.3em', marginTop: 0 } }}
        action={
          <IconButton component={Link} to={`/${lang}/projects/${project.slug}`} size="large">
            <ArrowForward />
          </IconButton>
        }
        title={project.title}
        subheader={(
          <span>
            {learningObjectiveCats.map(cat => {
              const icon = learningObjectiveToIcon(cat);
              return (
                <span
                  key={`icon-${cat}`}
                  title={cat}
                  style={{
                    display: 'inline-block',
                    width: 24,
                    height: 24,
                    marginRight: 3,
                    backgroundColor: icon.color,
                    WebkitMask: `url(${icon.svg}) no-repeat center`,
                    mask: `url(${icon.svg}) no-repeat center`,
                  }}
                />
              );
            })}
          </span>
        )}
      />
      <CardContent className={classes.cardContent}>
        <div
          style={{
            whiteSpace: 'inherit',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxHeight: 200,
          }}
          dangerouslySetInnerHTML={{ __html: project.summary }}
        ></div>
      </CardContent>
    </Card>
  );
};

const ProjectGroup = ({ prefix, projects, track, intl }) => {
  return (
    <div style={{ marginTop: 30, marginBottom: 50 }}>
      <Typography variant="h3">Nivel {prefix}</Typography>
      <div
        style={{ marginBottom: 25 }}
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({ id: `projects.${track}.level.${prefix}` }),
        }}
      />
      <Grid container spacing={3}>
        {projects.map(project => (
          <Grid key={project.slug} item xs={12} sm={6} md={4}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
      <div style={{ pageBreakAfter: 'always' }}></div>
    </div>
  );
};

const Projects = ({ projects, track }) => {
  const intl = useIntl();
  const { locale } = useLocale();
  const projectsByPrefix = projects
    .filter(p => p.track === track && p.locale === locale)
    .map(p => ({ ...p, slug: /-pt/.test(p.slug) ? p.slug.slice(0, -3) : p.slug }))
    .reduce(
      (memo, p) => ({ ...memo, [p.prefix]: (memo[p.prefix] || []).concat(p) }),
      {},
    );

  return (
    <div>
      <Typography variant="h2"><FormattedMessage id="projects" /></Typography>
      <div dangerouslySetInnerHTML={{
        __html: intl.formatMessage({
          id: `projects.${track}.intro`,
        })
      }} />
      {Object.keys(projectsByPrefix).sort().map(prefix => (
        <ProjectGroup
          key={`group-${prefix}`}
          prefix={prefix}
          projects={projectsByPrefix[prefix]}
          track={track}
          intl={intl}
        />
      ))}
    </div>
  )
};

export default Projects;