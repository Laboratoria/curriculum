import { createContext, useContext } from 'react';
import { useParams } from 'react-router-dom';
import messages from './messages';
import { IntlProvider } from 'react-intl';

const LocaleContext = createContext();

//
// Custom hook for usage in functional components.
//
export const useLocale = () => useContext(LocaleContext);

const Intl = ({ children }) => {
  const { lang } = useParams();
  const locale = lang === 'pt' ? 'pt-BR' : 'es-ES';

  return (
    <IntlProvider locale={locale} messages={messages[locale]} key={locale}>
      <LocaleContext.Provider value={{ locale }}>
        {children}
      </LocaleContext.Provider>
    </IntlProvider>
  );
};

export default Intl;
