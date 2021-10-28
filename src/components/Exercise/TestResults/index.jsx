import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ErrorIcon from '@material-ui/icons/Error';
import red from '@material-ui/core/colors/red';
import Suite from './Suite';
import Summary from './Summary';

const useStyles = makeStyles((theme) => ({
  failure: {
    backgroundColor: red[500],
    marginRight: theme.spacing(1),
  },
}));

const TestResults = ({ results }) => {
  const classes = useStyles();
  return (
    <List>
      {results instanceof Error
        ? (
          <ListItem>
            <Avatar className={classes.failure}>
              <ErrorIcon />
            </Avatar>
            <ListItemText primary={results.message} />
          </ListItem>
        )
        : (
          <>
            <Suite suite={results.suite} />
            <Summary stats={results.stats} />
          </>
        )}
    </List>
  );
}

export default TestResults;