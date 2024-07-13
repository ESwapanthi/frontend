import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigation } from '../NavigationHelper';
import './ProgressPage.css'; // Import your CSS file

const ProgressPage = () => {
  const { state } = useLocation();
  const { goToPrevious } = useNavigation();

  // Retrieve correctAnswers and totalQuestions from state
  const correctAnswers = state ? state.correctAnswers || 0 : 0;
  const totalQuestions = state ? state.totalQuestions || 0 : 0;

  // Calculate percentage
  const percentage = totalQuestions === 0 ? 0 : (correctAnswers / totalQuestions) * 100;

  return (
    <div className="progress-container">
      <h1 className="progress-heading">Progress Page</h1>
      <p className="progress-info">Correct Answers: {correctAnswers} / {totalQuestions}</p>
      <p className="progress-info">Percentage: {percentage}%</p>
      <p className="progress-feedback">Feedback: {percentage >= 60 ? 'Good' : 'Poor'}</p>
      <button className="progress-button" onClick={() => goToPrevious()}>Previous</button>
      <button className="progress-button" disabled>Next</button>
    </div>
  );
};

export default ProgressPage;
