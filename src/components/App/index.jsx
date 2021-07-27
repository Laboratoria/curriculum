import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import IntlProvider from '../../intl/IntlProvider';
import { useApp } from '../../lib/app';
import Loading from '../Loading';
import './App.css';

// Dynamic lazy imports for code splitting based on routes.
const Home = lazy(() => import('../Home'));
const Topic = lazy(() => import('../Topic'));
const Project = lazy(() => import('../Project'));
const SignIn = lazy(() => import('../SignIn'));
const TopBar = lazy(() => import('../TopBar'));
const Track = lazy(() => import('../Track'));

const App = () => {
  const { auth } = useApp();
  const [defaulLocale, setDefaulLocale] = useState();

  useEffect(() => {
    if (auth.user && !auth.profile) {
      return;
    }


    const profileLocale = (auth.profile || {}).locale;
    setDefaulLocale(
      ['es-ES', 'pt-BR'].includes(profileLocale)
        ? profileLocale
        : navigator.language.split('-')[0] === 'pt'
          ? 'pt-BR'
          : 'es-ES'
    )
  }, [auth]);

  if (!defaulLocale) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <div className="App">
          <Switch>
            <Route
              path="/:lang"
              render={(props) => {
                const { path, params } = props.match;

                if (!['es', 'pt'].includes(params.lang)) {
                  return (
                    <Redirect
                      to={`/${defaulLocale.split('-')[0]}${props.history.location.pathname}`}
                    />
                  );
                }

                return (
                  <IntlProvider lang={params.lang}>
                    <TopBar />
                    <Switch>
                      <Route path={`${path}/signin`}>
                        <SignIn />
                      </Route>
                      <Route path={`${path}/projects/:slug`}>
                        <Project />
                      </Route>
                      <Route path={`${path}/topics/:slug`}>
                        <Topic />
                      </Route>
                      <Route path={`${path}/:track`}>
                        <Track />
                      </Route>
                      <Route path={path}>
                        <Home />
                      </Route>
                    </Switch>
                  </IntlProvider>
                );
              }}
            />
            <Route
              exact
              path="/"
              render={() => <Redirect to={`/${defaulLocale.split('-')[0]}`} />}
            />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};

export default App;
