import { Link, useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: 56,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    [theme.breakpoints.up('sm')]: {
      top: 64,
    },
  },
  link: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: theme.typography.h2.fontFamily,
    height: 'calc(50vh - 23px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    fontSize: '1.6em',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(50vh - 32px)',
      fontSize: '2em',
    },
  },
  linkInner: {
    padding: theme.spacing(1),
  },
}));

const Home = () => {
  const theme = useTheme();
  const classes = useStyles();
  const { lang } = useParams();

  return (
    <div className={classes.root}>
      <Link
        to={`/${lang}/js`}
        className={classes.link}
        style={{
          backgroundColor: theme.palette.primary.main,
          backgroundImage: 'url(https://user-images.githubusercontent.com/110297/122165868-6f910000-ce3e-11eb-980f-3ec28dde6276.jpg)',
        }}
      >
        <div
          className={classes.linkInner}
          style={{ backgroundColor: theme.palette.primary.main }}
        >
          <FormattedMessage id="webDev" />
        </div>
      </Link>
      <Link
        to={`/${lang}/ux`}
        className={classes.link}
        style={{
          backgroundColor: theme.palette.mint.main,
          backgroundImage: 'url(https://user-images.githubusercontent.com/110297/122165864-6ef86980-ce3e-11eb-8040-e1b5a07f7492.jpg)',
        }}
      >
        <div
          className={classes.linkInner}
          style={{ backgroundColor: theme.palette.mint.main }}
        >
          <FormattedMessage id="ux" />
        </div>
      </Link>
    </div>
  )
};

export default Home;