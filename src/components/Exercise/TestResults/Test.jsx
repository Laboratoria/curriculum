import makeStyles from '@mui/styles/makeStyles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import DoneIcon from '@mui/icons-material/Done';
import ErrorIcon from '@mui/icons-material/Error';
import { red, green } from '@mui/material/colors';

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