import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FormattedMessage } from 'react-intl';

const Summary = ({ stats }) => (
  <ListItem>
    <ListItemText
      primary={
        stats.failures ? (
          <FormattedMessage
            id="exercise-test-results.failures"
            values={{ failures: stats.failures, tests: stats.tests }}
          />
        ) : (
          <FormattedMessage
            id="exercise-test-results.passes"
            values={{ passes: stats.passes }}
          />
        )
      }
      secondary={`(${stats.duration}ms)`}
    />
  </ListItem>
);

export default Summary;