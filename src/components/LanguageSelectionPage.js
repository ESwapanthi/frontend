import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import styles from './LanguageSelectionPage.module.css'; // Import CSS module

const LanguageSelectionPage = () => {
  const navigate = useNavigate(); // Hook for navigation
  
  const [language, setLanguage] = useState('');

  const handleSelection = (e) => {
    setLanguage(e.target.value);
  };

  const handleNext = () => {
    if (language) {
      navigate(`/level-selection/${language}`);
    } else {
      // Handle case where no language is selected
      alert('Please select a language.');
    }
  };

  return (
    <div className={styles['language-selection-container']}>
      <h2 className={styles['language-selection-heading']}>Language Selection Page</h2>
      <select className={styles['language-selection-input']} value={language} onChange={handleSelection}>
        <option value="">Select a language</option>
        <option value="english">English</option>
      </select>
      <div className={styles['language-navigation']}>
        <button className={styles['language-navigation-button']} onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default LanguageSelectionPage;
