import React from 'react';
import ReactDOM from 'react-dom';
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  AppProvider,
  themeConfig,
  createAppWithProfiler,
} from '@laboratoria/react';
import '@laboratoria/react/src/theme/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const AppWithProfiler = createAppWithProfiler('curriculum.laboratoria.la', App);

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(themeConfig)}>
        <AppProvider>
          <CssBaseline />
          <AppWithProfiler />
        </AppProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
