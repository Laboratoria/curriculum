import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '../Breadcrumbs';
import Content from '../Content';
import ExercisesList from './ExercisesList';
import Quiz from '../Quiz';

const Part = ({ topic }) => {
  const params = useParams();
  const part = topic.syllabus[params.unit].parts[params.part];
  const exercises = Object.keys(part.exercises || {}).map(key => ({
    ...part.exercises[key],
    slug: key,
  }));

  return (
    <>
      <Breadcrumbs topic={topic} />
      <Typography variant="h1">{part.title}</Typography>
      <Content html={part.body} />
      {!!exercises.length && (
        <ExercisesList exercises={exercises} />
      )}
      {!!part.questions && <Quiz topic={topic} part={part} />}
    </>
  );
};

export default Part;