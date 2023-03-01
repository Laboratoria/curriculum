import { lazy, Suspense } from 'react';
import { Navigate, Routes, Route, useLocation, useParams } from 'react-router-dom';
import { Loading, ScrollRestoration } from '@laboratoria/react';
import IntlProvider from '../../intl/IntlProvider';

// Dynamic lazy imports for code splitting based on routes.
const Home = lazy(() => import('../Home'));
const Topic = lazy(() => import('../Topic'));
const Project = lazy(() => import('../Project'));
const TopBar = lazy(() => import('../TopBar'));
const Track = lazy(() => import('../Track'));

const RoutesWithIntl = ({ defaultLang }) => {
  const location = useLocation();
  const { lang } = useParams();

  if (!['es', 'pt'].includes(lang)) {
    return (
      <Navigate
        to={`/${defaultLang}${location.pathname}`}
      />
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <IntlProvider lang={lang}>
        <ScrollRestoration />
        <TopBar />
        <Routes>
          <Route path={`projects/:slug`} element={<Project />} />
          <Route path={`topics/:slug/*`} element={<Topic />} />
          <Route path={`:track/*`} element={<Track />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </IntlProvider>
    </Suspense>
  );
};

export default RoutesWithIntl;