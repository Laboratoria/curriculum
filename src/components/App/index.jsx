import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useApp } from '@laboratoria/react';
import Loading from '../Loading';
import RoutesWithIntl from './RoutesWithIntl';
import './App.css';

const App = () => {
  const { auth } = useApp();
  const [defaulLocale, setDefaulLocale] = useState();

  useEffect(() => {
    const userLang = auth.user?.lang;
    setDefaulLocale(
      userLang === 'es'
        ? 'es-ES'
        : userLang === 'pt'
          ? 'pt-BR'
          : navigator.language.split('-')[0] === 'pt'
            ? 'pt-BR'
            : 'es-ES'
    )
  }, [auth]);

  if (!defaulLocale) {
    return <Loading />;
  }

  const defaultLang = defaulLocale.split('-')[0];

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/${defaultLang}`} />}
          />
          <Route
            path="/:lang/*"
            element={<RoutesWithIntl defaultLang={defaultLang} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
