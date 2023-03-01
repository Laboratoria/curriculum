import { createContext, useContext, useEffect } from 'react';
import { IntlProvider as BaseIntlProvider, FormattedMessage } from 'react-intl';
import es from './es';
import pt from './pt';

const messages = { es, pt };

export const registerMessages = (namespace, newMessages) => {
  Object.keys(newMessages).forEach((lang) => {
    Object.keys(newMessages[lang]).forEach((key) => {
      Object.assign(messages[lang], {
        [`${namespace}/${key}`]: newMessages[lang][key],
      });
    });
  });
  return {
    FormattedMessage: (props) => {
      return <FormattedMessage {...props} />
    },
  };
};

const LangContext = createContext();

export const useLang = () => useContext(LangContext);

export const IntlProvider = ({ lang, children }) => {
  useEffect(() => {
    const htmlNode = document.querySelector('html');
    htmlNode.lang = lang;
  }, [lang]);

  return (
    <BaseIntlProvider locale={lang} messages={messages[lang]} key={lang}>
      <LangContext.Provider value={{ lang }}>
        {children}
      </LangContext.Provider>
    </BaseIntlProvider>
  );
};
