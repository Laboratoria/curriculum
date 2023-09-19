import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DrawerMenu from './DrawerMenu';
import laboratoriaLogo from '@laboratoria/react/src/icons/laboratoria-logo.svg';
import laboratoriaIcon from '@laboratoria/react/src/icons/laboratoria-isotipo.svg';

const flexCenter = {
  display: 'flex',
  alignItems: 'center',
};

const sx = theme => ({
  pt: 1,
  pb: 3,
  [theme.breakpoints.up('sm')]: {
    pt: 4,
  },
  backgroundColor: '#fff',

  '.MuiAppBar-root': {
    mx: 'auto',
    maxWidth: 'lg',
  },
  '.hide-when-small': {
    ...flexCenter,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  '.hide-when-not-small': {
    ...flexCenter,
    [theme.breakpoints.up('sm')]: {
      display: 'none !important',
    },
  },
  '.MuiGrid-item': {
    ...flexCenter,
  },
});

const TopBar = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const urlWithoutLang = `${pathname.split('/').slice(2).join('/')}${search}`;

  return (
    <Box sx={sx}>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={0}>
            <Grid item xs={3}>
              <DrawerMenu lang={lang} />
              <Link to={`/${lang}/`}>
                <Typography variant="body2" sx={{
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <span className="hide-when-not-small">
                    <img
                      alt="Laboratoria logo"
                      src={laboratoriaIcon}
                      height={56}
                    />
                  </span>
                  <span className="hide-when-small">
                    <img
                      alt="Laboratoria logo"
                      src={laboratoriaLogo}
                      height={36}
                      style={{ marginRight: 10 }}
                    />
                  </span>
                  Curriculum
                </Typography>
              </Link>
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
                justifyContent: 'right',
              }}
            >
              <FormControl variant="standard" sx={{ marginRight: 3 }}>
                <Select
                  labelId="lang-select-label"
                  id="lang-select"
                  displayEmpty
                  disableUnderline
                  value={lang}
                  onChange={e => navigate(`/${e.target.value}/${urlWithoutLang}`)}
                >
                  <MenuItem value="es">ES</MenuItem>
                  <MenuItem value="pt">PT</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: '-5px',
              }}
            >
              <x-tech-support lang={lang} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
