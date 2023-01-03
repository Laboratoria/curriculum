const theme = {
  typography: {
    // fontSize: 13,
    fontFamily: [
      '"Open Sans"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      '"Fira Sans"',
      '"Droid Sans"',
      '"Helvetica Neue"',
      'sans-serif',
    ],
    h1: {
      fontFamily: 'Bitter',
      fontSize: '2rem',
      fontWeight: 'bold',
      marginTop: 30,
      marginBottom: 20,
    },
    h2: {
      fontFamily: 'Bitter',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 20,
    },
    h3: {
      fontFamily: 'Bitter',
      fontSize: '1.4rem',
      fontWeight: 'bold',
      marginTop: 15,
      marginBottom: 15,
    },
    h4: {
      fontFamily: 'Bitter',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
    },
    h5: {
      fontFamily: 'Bitter',
      fontSize: '1rem',
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
    },
    p: {
      fontSize: '1rem',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      light: '#ffea4d',
      main: '#ffe521',
      dark: '#b2a017',
    },
    magenta: {
      light: '#ff33b1',
      main: '#ff009e',
      dark: '#b2006e',
    },
    mint: {
      light: '#77f9ae',
      main: '#56f89a',
      dark: '#3cad6b',
    },
    black: {
      light: '#222',
      main: '#111',
      dark: '#000',
    },
    background: {
      // default: '#f0f0f0',
      // paper: '#fff',
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        backgroundColor: '#fff',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
      },
    },
  },
};

export default theme;
