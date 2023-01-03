import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ErrorIcon from '@mui/icons-material/Error';
import Suite from './Suite';
import Summary from './Summary';
import { red } from '@mui/material/colors';

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