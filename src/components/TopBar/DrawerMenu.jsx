import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import makeStyles from '@mui/styles/makeStyles';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleIcon from '@mui/icons-material/People';

const version = process.env.REACT_APP_VERSION;

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: 0,
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(2),
    },
  },
  list: {
    width: 250,
  },
}));

const DrawerMenu = ({ lang }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const classes = useStyles();
  return (
    <>
      <IconButton
        onClick={() => setDrawerIsOpen(true)}
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        size="large">
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={drawerIsOpen}
        onClick={() => setDrawerIsOpen(false)}
      >
        <div className={classes.list}>
          <List>
            <ListItemButton component={Link} to={`/${lang}`}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary={<FormattedMessage id="home" />} />
            </ListItemButton>
          </List>
          <Divider />
          <List>
            <ListItemButton component={Link} to={`/${lang}/js`}>
              <ListItemIcon><DeveloperModeIcon /></ListItemIcon>
              <ListItemText primary={<FormattedMessage id="webDev" />} />
            </ListItemButton>
            <ListItemButton component={Link} to={`/${lang}/ux`}>
              <ListItemIcon><PeopleIcon /></ListItemIcon>
              <ListItemText primary={<FormattedMessage id="ux" />} />
            </ListItemButton>
            <ListItemButton onClick={() => window.open('https://github.com/Laboratoria/bootcamp')}>
              <ListItemIcon><GitHubIcon /></ListItemIcon>
              <ListItemText primary="Ver en GitHub" />
            </ListItemButton>
            <ListItem>
              <ListItemText secondary={`v${version}`} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerMenu;