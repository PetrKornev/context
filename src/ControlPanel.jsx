import ThemeContext from './ThemeContext';
import LanguageContext from './LanguageContext';
import { useContext } from 'react';

const ControlPanel = () => {
  const { toggleLanguage } = useContext(LanguageContext);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleLanguage}>Сменить язык</button>
      <button onClick={toggleTheme}>Сменить тему</button>
    </div>
  );
};

export default ControlPanel;
