import { Fragment, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
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
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

const TopBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const { lang } = useParams();
  // const { auth } = useApp();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const urlWithoutLang = history.location.pathname.split('/').slice(2).join('/');

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
          >
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
              onChange={e => history.push(`/${e.target.value}/${urlWithoutLang}`)}
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
        history={history}
      />
    </Fragment>
  );
};

export default TopBar;
