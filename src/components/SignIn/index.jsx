import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
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
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { auth } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    auth.signIn({ email, password })
      .then(() => history.push('/'))
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
