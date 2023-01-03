import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Loading from '../Loading';
import { useApp } from '../../lib/app';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { auth } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    auth.signIn({ email, password })
      .then(() => navigate('/'))
      .catch((err) => {
        alert(err.message);
        setIsSigningIn(false);
      });
  };

  return (
    <Container className={classes.root}>
      {isSigningIn
        ? <Loading />
        : (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" type="submit">
                  Sign in
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      }
    </Container>
  );
};

export default SignIn;
