import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import makeStyles from '@mui/styles/makeStyles';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import PeopleIcon from '@mui/icons-material/People';

const version = process.env.REACT_APP_VERSION;

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