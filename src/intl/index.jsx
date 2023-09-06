import { createContext, useContext, useEffect } from 'react';
import { IntlProvider as BaseIntlProvider } from 'react-intl';
import es from './es';
import pt from './pt';

const messages = { es, pt };

const LangContext = createContext();

export const useLang = () => useContext(LangContext);

export const IntlProvider = ({ lang, children }) => {
  useEffect(() => {
    const htmlNode = document.querySelector('html');
    htmlNode.lang = lang;
  }, [lang]);

  return (
    <BaseIntlProvider locale={lang} messages={messages[lang]} key={lang}>
      <LangContext.Provider value={{ lang }}>{children}</LangContext.Provider>
    </BaseIntlProvider>
  );
};
