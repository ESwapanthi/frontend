import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProgressPage from './components/ProgressPage';
import LanguageSelectionPage from './components/LanguageSelectionPage';
import LevelSelectionPage from './components/LevelSelectionPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ExercisePage from './components/ExercisePage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} />} />
      <Route path="/signup" element={<SignupPage />} />
      {loggedIn ? (
        <>
          <Route path="/language-selection" element={<LanguageSelectionPage />} />
          <Route path="/level-selection/:language" element={<LevelSelectionPage />} />
          <Route path="/exercise/:subject/:level/:type" element={<ExercisePage />} />
          <Route path="/progress" element={<ProgressPage />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
}

export default App;
