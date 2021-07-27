import { Link } from 'react-router-dom';

const ExercisesList = ({ slug, exercises }) => (
  <div>
    {exercises.map(exercise => (
      <div key={exercise.slug}>
        <Link to={`${slug}/${exercise.slug}`}>
          {exercise.title}
        </Link>
      </div>
    ))}
  </div>
);

export default ExercisesList;