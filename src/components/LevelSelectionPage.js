import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { useNavigation } from '../NavigationHelper'; // Assuming NavigationHelper is defined
import styles from './LevelSelectionPage.module.css'; // Import CSS module

const LevelSelectionPage = () => {
  const { goToNext, goToPrevious } = useNavigation();
  const { language } = useParams();
  const navigate = useNavigate(); // Hook for navigation
  const currentPath = `/level-selection/${language}`;

  const handleLevelSelect = (level) => {
    navigate(`/exercise/${language}/${level}/writing`);
  };

  return (
    <div className={styles.levelSelectionContainer}>
      <h2>Level Selection for {language}</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.levelButton} onClick={() => handleLevelSelect('beginner')}>Beginner</button>
        <button className={styles.levelButton} onClick={() => handleLevelSelect('medium')}>Medium</button>
        <button className={styles.levelButton} onClick={() => handleLevelSelect('advanced')}>Advanced</button>
      </div>
      <div className={styles.navigationButtons}>
        <button className={styles.navigationButton} onClick={() => goToPrevious(currentPath)}>Previous</button>
        <button className={styles.navigationButton} onClick={() => goToNext(currentPath)}>Next</button>
      </div>
    </div>
  );
};

export default LevelSelectionPage;
