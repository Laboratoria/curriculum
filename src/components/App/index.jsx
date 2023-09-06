import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useApp, Loading } from '@laboratoria/react';
import RoutesWithIntl from './RoutesWithIntl';
import './App.css';

const App = () => {
  const { auth } = useApp();
  const [defaultLang, setDefaultLang] = useState();

  useEffect(() => {
    if (auth.user && !auth.profile) {
      return;
    }

    const profileLang = auth.user?.lang;
    setDefaultLang(
      ['es', 'pt'].includes(profileLang)
        ? profileLang
        : navigator.language.split('-')[0] === 'pt'
        ? 'pt'
        : 'es',
    );
  }, [auth]);

  if (!defaultLang) {
    return <Loading />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to={`/${defaultLang}/${window.location.search}`} />
          }
        />
        <Route
          path="/:lang/*"
          element={<RoutesWithIntl defaultLang={defaultLang} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
