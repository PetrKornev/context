import LanguageContext from './LanguageContext';
import { useContext } from 'react';
import { translations } from './translations';

const UserProfile = () => {
  const { language } = useContext(LanguageContext);

  return <div>{translations[language].profile}</div>;
};

export default UserProfile;
