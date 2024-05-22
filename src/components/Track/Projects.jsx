import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Typography } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { learningObjectiveToIcon } from '../../lib/learning-objectives';

const Project = ({ lang, project }) => {
  const learningObjectiveCats = (project.learningObjectives || []).reduce(
    (memo, item) => (
      !memo.includes(item.split('/')[0])
        ? memo.concat(item.split('/')[0])
        : memo
    ),
    [],
  );

  const { title, summary } = project.intl[lang];

  return (
    <Paper elevation={3}>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={project.thumb}
          alt={title}
        />
        <CardHeader
          sx={{ pb: 0 }}
          titleTypographyProps={{ sx: { fontSize: '1.6em', mt: 0, mb: 1 } }}
          action={
            <IconButton
              component={Link}
              to={`/${lang}/projects/${project.slug}`}
              size="large"
            >
              <ArrowForward />
            </IconButton>
          }
          title={title}
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
        <CardContent sx={{ pt: 0, pb: 0 }}>
          <div
            dangerouslySetInnerHTML={{ __html: summary }}
          ></div>
        </CardContent>
      </Card>
    </Paper>
  );
};

const ProjectGroup = ({ prefix, projects, track, lang, intl }) => {
  return (
    <div data-testid="projects" style={{ marginTop: 30, marginBottom: 50 }}>
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
            <Project project={project} lang={lang} />
          </Grid>
        ))}
      </Grid>
      <div style={{ pageBreakAfter: 'always' }}></div>
    </div>
  );
};

const Projects = ({ lang, projects, track }) => {
  const intl = useIntl();

  const projectsByPrefix = projects
    .filter(p => p.track === track && p.intl[lang])
    .reduce(
      (memo, p) => ({ ...memo, [p.prefix]: (memo[p.prefix] || []).concat(p) }),
      {},
    );

  return (
    <>
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
          lang={lang}
          intl={intl}
        />
      ))}
    </>
  )
};

export default Projects;
