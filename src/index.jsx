import React from 'react';
import ReactDOM from 'react-dom';
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProvider, themeConfig } from '@laboratoria/react';
import '@laboratoria/react/src/theme/index.css';
import * as Sentry from "@sentry/react";
import App from './components/App';
import reportWebVitals from './reportWebVitals';

Sentry.init({
  environment: (
    process.env.NODE_ENV !== 'production'
      ? 'development'
      : window.location.hostname === 'curriculum.laboratoria.la'
        ? 'production'
        : 'staging'
  ),
  release: process.env.REACT_APP_VERSION,
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: [
        "localhost",
        /^https:\/\/api\.laboratoria\.la/,
      ],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const AppWithProfiler = Sentry.withProfiler(App);

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
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
