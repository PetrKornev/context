import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { LanguageProvider } from './LanguageContext';
import ThemeContext from './ThemeContext';
import { ThemeProvider } from './ThemeContext';
import ControlPanel from './ControlPanel';
import Header from './Header';
import UserProfile from './UserProfile';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <>
      <LanguageProvider>
        <ThemeProvider>
          <ControlPanel />
          <Header />
          <UserProfile />
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
