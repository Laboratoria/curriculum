import makeStyles from '@mui/styles/makeStyles';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import Content from '../Content';

const useStyles = makeStyles(theme => ({
  formControlLabel: {
    margin: theme.spacing(1),
  },
  input: {
    marginRight: theme.spacing(1),
  },
}));

const Question = ({ question, questionIdx, answer, hasSubmitted, onChange }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3">{question.title}</Typography>
      <Content html={question.description} />
      <FormGroup>
        {question.answers.map((text, idx) => (
          <FormControlLabel
            className={classes.formControlLabel}
            style={{
              backgroundColor: (
                !hasSubmitted
                  ? 'inherit'
                  : question.solution.includes(idx)
                    ? 'lightgreen'
                    : (answer || []).includes(idx) ? 'pink' : ''
              ),
            }}
            key={`answer-${idx}`}
            control={<input
              className={classes.input}
              name={`question-${questionIdx}`}
              type={question.solution.length > 1 ? 'checkbox' : 'radio'}
              value={idx}
              checked={!!answer && answer.includes(idx)}
              onChange={onChange}
              disabled={hasSubmitted}
            />}
            label={<Content html={text} />}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default Question;