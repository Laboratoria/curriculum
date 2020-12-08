import { useHistory, useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { useLocale } from '../../intl/IntlProvider';
import { learningObjectiveToIcon } from '../../lib/learning-objectives';

const Project = ({ project }) => {
  const history = useHistory();
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
      <CardHeader
        action={
          <IconButton onClick={() => history.push(`/${lang}/projects/${project.slug}`)}>
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
                    width: 16,
                    height: 16,
                    marginRight: 2,
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
    </Card>
  );
};

const ProjectGroup = ({ prefix, projects }) => {
  return (
    <div>
      <Typography variant="h3">{prefix}</Typography>
      <Grid container spacing={3}>
        {projects.map(project => (
          <Grid key={project.slug} item xs={12} sm={6} md={4} lg={3}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const Projects = ({ projects, track }) => {
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
      {Object.keys(projectsByPrefix).sort().map(prefix => (
        <ProjectGroup
          key={`group-${prefix}`}
          prefix={prefix}
          projects={projectsByPrefix[prefix]}
        />
      ))}
    </div>
  )
};

export default Projects;