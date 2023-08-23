import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CodeIcon from '@mui/icons-material/Code';
// import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleIcon from '@mui/icons-material/People';
import laboratoriaIcon from '@laboratoria/react/src/icons/laboratoria-isotipo.svg';

const version = process.env.VERSION;
const isPrerelease = /(alpha|beta)/.test(version);

const DrawerMenu = ({ lang }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setDrawerIsOpen(true)}
        edge="start"
        color="inherit"
        aria-label="menu"
        size="large"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerIsOpen}
        onClick={() => setDrawerIsOpen(false)}
        sx={{ width: '250px' }}
      >
        <List>
          <ListItem
            component={Link}
            to={`/${lang}/`}
            sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="hide-when-not-small">
              <img
                alt="Laboratoria logo"
                src={laboratoriaIcon}
                height={56}
              />
            </span>
          </ListItem>
        </List>
        <Divider />
        <List
          sx={{
            width: '300px',
            fontSize: { xs: '0.75rem', sm: '1.125rem' },
            fontWeight: '600',
          }}>
          <ListItemButton component={Link} to="https://www.laboratoria.la/">
            <ListItemText primary="Laboratoria" />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to={
              isPrerelease
                ? `https://laboratoria-bootcamp-next.web.app/${lang}`
                : `https://bootcamp.laboratoria.la/${lang}/`
            }
          >
            <ListItemText primary="Bootcamps" />
          </ListItemButton>
          <ListItemButton selected={true} component={Link} to={`/${lang}/`}>
            <ListItemText primary="Curriculum" />
          </ListItemButton>
          <List>
            <ListItemButton component={Link} to={`/${lang}/web-dev`}>
              <ListItemIcon><CodeIcon /></ListItemIcon>
              <ListItemText primary={<FormattedMessage id="webDev" />} />
            </ListItemButton>
            <ListItemButton component={Link} to={`/${lang}/ux`}>
              <ListItemIcon><PeopleIcon /></ListItemIcon>
              <ListItemText primary={<FormattedMessage id="ux" />} />
            </ListItemButton>
            {/* <ListItemButton onClick={() => window.open('https://github.com/Laboratoria/bootcamp')}>
              <ListItemIcon><GitHubIcon /></ListItemIcon>
              <ListItemText primary="Ver en GitHub" />
            </ListItemButton>
            <ListItem>
              <ListItemText secondary={`v${version}`} />
            </ListItem> */}
          </List>
          <ListItemButton
            component={Link}
            to={`https://talento.laboratoria.la/${lang === 'pt' ? 'br/' : ''}`}
          >
            <ListItemText primary={<FormattedMessage id="top-bar/hire" />} />
          </ListItemButton>
        </List>
        {lang === 'es' && (
          <>
            <Divider />
            <List>
              <ListItemButton component={Link} to="https://www.laboratoriaplus.la/">
                <ListItemText primary="Conoce Laboratoria+" />
              </ListItemButton>
            </List>
          </>
        )}
      </Drawer>
    </>
  );
};

export default DrawerMenu;