import ThemeContext from './ThemeContext';
import LanguageContext from './LanguageContext';
import { useContext } from 'react';

const ControlPanel = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleLanguage}>Сменить язык</button>
      <button onClick={toggleTheme}>Сменить тему</button>
    </div>
  );
};

export default ControlPanel;
