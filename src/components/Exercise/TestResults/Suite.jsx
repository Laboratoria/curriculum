import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Test from './Test';

const Suite = ({ suite }) => (
  <div>
    {suite.title && (
      <ListItem>
        <ListItemText primary={suite.title} />
      </ListItem>
    )}
    {suite.tests &&
      suite.tests.map(test => (
        <Test key={test.title} test={test} />
      ))}
    {suite.suites &&
      suite.suites.map(suite => (
        <Suite key={suite.title} suite={suite} />
      ))}
  </div>
);

export default Suite;