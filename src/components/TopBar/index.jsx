import { useLocation, useNavigate, useParams } from 'react-router-dom';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DrawerMenu from './DrawerMenu';
// import UserMenu from './UserMenu';
import laboratoriaLogo from '@laboratoria/react/dist/icons/laboratoria-logo.svg';
import laboratoriaIcon from '@laboratoria/react/dist/icons/laboratoria-isotipo.svg';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  offset: {
    ...theme.mixins.toolbar,
    marginBottom: theme.spacing(4),
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
  const urlWithoutLang = location.pathname.split('/').slice(2).join('/');

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <DrawerMenu lang={lang} />
          <Typography variant="body2" className={classes.title}>
            <span className={classes.hideWhenNotSmall}>
              <img
                alt="Laboratoria logo"
                src={laboratoriaIcon}
                height={56}
              />
            </span>
            <span className={classes.hideWhenSmall}>
              <img
                alt="Laboratoria logo"
                src={laboratoriaLogo}
                height={32}
                style={{ marginRight: 10 }}
              />
            </span>
            Curriculum
          </Typography>
          <FormControl
            variant="standard"
            sx={{ marginRight: 3 }}
          >
            <Select
              labelId="lang-select-label"
              id="lang-select"
              displayEmpty
              disableUnderline
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
          {/* <UserMenu lang={lang} history={history} /> */}
        </Toolbar>
      </AppBar>

      <div className={classes.offset} />
    </>
  );
};

export default TopBar;
