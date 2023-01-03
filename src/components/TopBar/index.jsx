import { Fragment, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
// import { useApp } from '../../lib/app';
import DrawerMenu from './DrawerMenu';
// import UserMenu from './UserMenu';
import laboratoriaLogo from '../../icons/laboratoria-logo.svg';
import laboratoriaIcon from '../../icons/laboratoria-isotipo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex',
  },
  offset: theme.mixins.toolbar,
  list: {
    width: 280,
  },
  langSelect: {
    marginRight: theme.spacing(1),
  },
  hideWhenNotSmall: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  hideWhenSmall: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const TopBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { lang } = useParams();
  const location = useLocation();
  // const { auth } = useApp();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const urlWithoutLang = location.pathname.split('/').slice(2).join('/');

  return (
    <Fragment>
      <AppBar style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton
            onClick={() => setDrawerIsOpen(true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            size="large">
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle1" className={classes.title}>
            <div className={classes.hideWhenNotSmall}>
              <img alt="Laboratoria logo" src={laboratoriaIcon} height={56} />
            </div>
            <div className={classes.hideWhenSmall}>
              <img alt="Laboratoria logo" src={laboratoriaLogo} height={32} style={{ marginRight: 10 }} /> Curriculum
            </div>
          </Typography>
          <FormControl className={classes.langSelect}>
            <Select
              labelId="lang-select-label"
              id="lang-select"
              displayEmpty
              value={lang}
              onChange={e => navigate(`/${e.target.value}/${urlWithoutLang}`)}
            >
              <MenuItem value="" disabled>Lang</MenuItem>
              <MenuItem value={'es'}>
                <span className={classes.hideWhenNotSmall}>ES</span>
                <span className={classes.hideWhenSmall}>Español</span>
              </MenuItem>
              <MenuItem value={'pt'}>
                <span className={classes.hideWhenNotSmall}>PT</span>
                <span className={classes.hideWhenSmall}>Português</span>
              </MenuItem>
            </Select>
          </FormControl>
          {/* <UserMenu lang={lang} auth={auth} history={history} /> */}
        </Toolbar>
      </AppBar>

      <div className={classes.offset} />

      <DrawerMenu
        drawerIsOpen={drawerIsOpen}
        setDrawerIsOpen={setDrawerIsOpen}
        lang={lang}
      />
    </Fragment>
  );
};

export default TopBar;
