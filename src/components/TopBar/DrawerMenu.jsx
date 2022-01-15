import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import GitHubIcon from '@material-ui/icons/GitHub';
import PeopleIcon from '@material-ui/icons/People';
import { version } from '../../../package.json';

const useStyles = makeStyles(() => ({
  list: {
    width: 250,
  },
}));

const DrawerMenu = ({ drawerIsOpen, setDrawerIsOpen, lang }) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      open={drawerIsOpen}
      onClick={() => setDrawerIsOpen(false)}
    >
      <div className={classes.list}>
        <List>
          <ListItem button component={Link} to={`/${lang}`}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary={<FormattedMessage id="home" />} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={Link} to={`/${lang}/js`}>
            <ListItemIcon><DeveloperModeIcon /></ListItemIcon>
            <ListItemText primary={<FormattedMessage id="webDev" />} />
          </ListItem>
          <ListItem button component={Link} to={`/${lang}/ux`}>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary={<FormattedMessage id="ux" />} />
          </ListItem>
          <ListItem button onClick={() => window.open('https://github.com/Laboratoria/bootcamp')}>
            <ListItemIcon><GitHubIcon /></ListItemIcon>
            <ListItemText primary="Ver en GitHub" />
          </ListItem>
          <ListItem>
            <ListItemText secondary={`v${version}`} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;