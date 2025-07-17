import ThemeContext from './ThemeContext';
import LanguageContext from './LanguageContext';
import { useContext, useEffect } from 'react';

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const translations = {
    en: {
      welcome: 'Welcome',
      profile: 'Your profile',
    },
    ru: {
      welcome: 'Добро пожаловать',
      profile: 'Твой профиль',
    },
  };
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [theme]);
  return <div>{translations[language].welcome}</div>;
};

export default Header;
