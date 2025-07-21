import ThemeContext from './ThemeContext';
import LanguageContext from './LanguageContext';
import { useContext, useEffect } from 'react';
import { translations } from './translations';

const Header = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

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
