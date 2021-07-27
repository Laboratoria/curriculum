import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '../Breadcrumbs';
import Loading from '../Loading';
import data from '../../lib/data';

const ExternalLink = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const LearningObjective = ({ lang, item, intl }) => {
  const buildLinkUrl = ({ title, url }) => {
    const parts = url.split('/');

    if (['topics', 'projects'].includes(parts[0])) {
      return <Link to={`/${lang}/${url}`}>{title}</Link>;
    }

    return <ExternalLink url={url} title={title} />;
  };

  return (
    <li>
      <Typography variant="h4">
        {intl.title || item}
      </Typography>
      {intl.links && !!intl.links.length && (
        <>
          <Typography variant="h5">Links</Typography>
          <ul>
            {intl.links.map(link => (
              <li key={link.url}>
                {buildLinkUrl(link)}
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
};

const LearningObjectiveCat = ({ lang, cat, project, learningObjectives }) => {
  const intl = learningObjectives.intl[lang];

  return (
    <div>
      <Typography variant="h3">
        {intl[cat].title || intl[cat] || cat}
      </Typography>
      <ul>
        {project.learningObjectives
          .filter(i => i.startsWith(`${cat}/`))
          .map(item => (
            <LearningObjective
              key={`${cat}-${item}`}
              item={item}
              intl={intl[item] || {}}
              lang={lang}
            />
          ))}
      </ul>
    </div>
  );
};

const Project = () => {
  const { lang, slug } = useParams();
  const [project, setProject] = useState();
  const [learningObjectives, setLearningObjectives] = useState();

  useEffect(() => {
    const id = `projects/${slug}${lang !== 'es' ? '-pt' : ''}`;
    data.subscribe(id, setProject);
    data.subscribe('learning-objectives', setLearningObjectives);
    return () => {
      data.unsubscribe(id, setProject);
    };
  }, [lang, slug]);

  if (!project || !learningObjectives) {
    return <Loading />;
  }

  const learningObjectiveCats = (project.learningObjectives || []).reduce(
    (memo, item) => {
      const cat = item.split('/')[0];
      return memo.includes(cat) ? memo : memo.concat(cat);
    },
    [],
  );

  const { repo, version, path } = project;
  const repoUrl = `https://github.com/${repo}`;
  const readmeUrl = `${repoUrl}/blob/v${version}/${path}/README${lang === 'pt' ? '.pt-BR' : ''}.md`;
  const projectUrl = `${repoUrl}/tree/v${version}/${path}`;

  return (
    <Container>
      <Breadcrumbs project={project} />
      <Typography variant="h1">{project.title}</Typography>

      <p>
        Ver enunciado completo (<ExternalLink url={readmeUrl} title="README.md" />)
        y <ExternalLink url={projectUrl} title="boilerplate" /> en GitHub.
      </p>

      {!!learningObjectiveCats.length && (
        <>
          <Typography variant="h2">
            <FormattedMessage id="learningObjectives" />
          </Typography>

          {learningObjectiveCats.map(key => (
            <LearningObjectiveCat
              key={key}
              cat={key}
              lang={lang}
              project={project}
              learningObjectives={learningObjectives}
            />
          ))}
        </>
      )}
    </Container >
  )
};

export default Project;