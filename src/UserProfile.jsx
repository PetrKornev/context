import ThemeContext from './ThemeContext';
import LanguageContext from './LanguageContext';
import { useContext } from 'react';

const UserProfile = () => {
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
  return <div>{translations[language].profile}</div>;
};

export default UserProfile;
