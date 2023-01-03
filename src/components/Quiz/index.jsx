import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Question from './Question';

const useStyles = makeStyles(theme => ({
  results: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
}));

const createInitialState = questions => questions.reduce(
  (memo, _, idx) => ({ ...memo, [idx]: [] }),
  {},
);

const Quiz = ({ topic, part }) => {
  const classes = useStyles();
  const { slug, unit, part: partKey } = useParams();
  const id = `quizzes/${slug}/${unit}/${partKey}`;
  const cachedState = JSON.parse(window.localStorage.getItem(id) || 'null');
  const [state, setState] = useState(cachedState || {
    hasSubmitted: false,
    answers: createInitialState(part.questions),
    version: topic.version,
  });

  useEffect(() => {
    window.localStorage.setItem(id, JSON.stringify({ ...state, ts: Date.now() }));
  }, [id, state])

  const handleChange = (e) => {
    const questionIdx = parseInt(e.target.name.split('-')[1], 10);
    const answerIdx = parseInt(e.target.value, 10);
    setState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionIdx]: (
          e.target.type === 'radio'
            ? [answerIdx]
            : prev.answers[questionIdx] && prev.answers[questionIdx].includes(answerIdx)
              ? prev.answers[questionIdx].filter(v => v !== answerIdx)
              : (prev.answers[questionIdx] || []).concat(answerIdx).sort()
        ),
      },
    }));
  };

  const handleSubmit = () => {
    const results = part.questions.reduce(
      (memo, question, idx) => {
        const ok = `${question.solution.sort()}` === `${state.answers[idx].sort()}`;
        return {
          failures: !ok ? memo.failures + 1 : memo.failures,
          questions: {
            ...memo.questions,
            [idx]: ok,
          },
        };
      },
      { failures: 0 },
    );

    setState(prev => ({ ...prev, hasSubmitted: true, results }));
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {state.hasSubmitted && (
        <Paper className={classes.results}>
          <p>
            <FormattedMessage
              id="quiz-results"
              values={{
                total: part.questions.length,
                success: part.questions.length - state.results.failures,
              }}
            />
          </p>
          <p>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setState({
                hasSubmitted: false,
                answers: createInitialState(part.questions),
                version: topic.version,
              })}
            >
              <FormattedMessage id="reset" />
            </Button>
          </p>
        </Paper>
      )}
      {part.questions.map((question, idx) => (
        <Question
          key={`question-${idx}`}
          question={question}
          questionIdx={idx}
          answer={state.answers[idx]}
          hasSubmitted={state.hasSubmitted}
          onChange={handleChange}
        />
      ))}
      <p>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={state.hasSubmitted}
        >
          <FormattedMessage id="submit" />
        </Button>
      </p>
    </div>
  );
};

export default Quiz;