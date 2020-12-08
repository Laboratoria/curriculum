import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/Error';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: green[500],
    marginRight: theme.spacing(1),
  },
  failure: {
    backgroundColor: red[500],
    marginRight: theme.spacing(1),
  },
}));

const Test = ({ test }) => {
  const classes = useStyles();

  return (
    <ListItem>
      {test.state === 'passed' && (
        <Avatar className={classes.success}>
          <DoneIcon />
        </Avatar>
      )}
      {test.state === 'failed' && (
        <Avatar className={classes.failure}>
          <ErrorIcon />
        </Avatar>
      )}
      <ListItemText
        primary={test.title}
        secondary={test.err ? test.err : 'ok'}
      />
    </ListItem>
  );
};

export default Test;