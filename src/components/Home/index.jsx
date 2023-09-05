import { Link, useParams } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { useTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { setPage } from '@laboratoria/react';

const version = process.env.VERSION;
const isPrerelease = /(alpha|beta)/.test(version);

const Home = () => {
  const theme = useTheme();
  const { lang } = useParams();
  const { formatMessage } = useIntl();
  setPage({title: formatMessage({id: 'app-title'}), description: ''});

  const linkStyle = {
    display: 'block',
    position: 'relative',
    height: 333,
    borderRadius: '0.625rem',
    backgroundSize: 'cover',
    color: '#000',
  };
  const h2Sx = {
    position: 'absolute',
    bottom: 20,
    left: 20,
    px: 2,
    py: 1,
    borderRadius: '0.625rem',
  };

  const applyUrl = (
    isPrerelease
      ? `https://laboratoria-bootcamp-next.web.app/${lang}/`
      : `https://bootcamp.laboratoria.la/${lang}/`
  );

  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Alert severity="info">
            <p
              dangerouslySetInnerHTML={{
                __html: formatMessage({ id: 'home/alert-info' }),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: formatMessage({ id: 'home/alert-apply' }, {
                  link: `<a href="${applyUrl}">${formatMessage({ id: 'here' })}</a>`,
                }),
              }}
            />
          </Alert>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link
            to={`/${lang}/web-dev`}
            style={{
              ...linkStyle,
              backgroundColor: theme.palette.mint.main,
              backgroundImage: 'url(https://user-images.githubusercontent.com/110297/213300132-3da5efe6-fd3a-4cf1-8367-c88219811257.png)',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                ...h2Sx,
                backgroundColor: theme.palette.mint.main,
              }}
            >
              <FormattedMessage id="webDev" />
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link
            to={`/${lang}/ux`}
            style={{
              ...linkStyle,
              backgroundColor: theme.palette.magenta.main,
              backgroundImage: 'url(https://user-images.githubusercontent.com/110297/213300838-1d55a270-e8e4-4a67-b75e-7e95364f5f45.png)',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                ...h2Sx,
                backgroundColor: theme.palette.magenta.main,
              }}
            >
              <FormattedMessage id="ux" />
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
};

export default Home;