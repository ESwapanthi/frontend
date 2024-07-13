import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useNavigation } from '../NavigationHelper';
import './ExercisePage.css'; // Import your CSS file

const ExercisePage = () => {
  const { subject, level, type } = useParams();
  const navigate = useNavigate();
  const { goToPrevious } = useNavigation(); // Remove goToNext as it is not used
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    fetchQuestions(subject, level, type);
  }, [subject, level, type]);

  const fetchQuestions = async (subject, level, type) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`http://localhost:5002/api/questions/${subject}/${level}/${type}`);
      setQuestions(response.data);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setError('Failed to load questions. Please try again later.');
      setLoading(false);
    }
  };

  const handleAnswerChange = (questionIndex, answer, isCorrect) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: { answer, isCorrect },
    }));
  };

  const handleSubmit = () => {
    // Calculate correct answers
    let correctCount = 0;
    for (const answer of Object.values(selectedAnswers)) {
      if (answer.isCorrect) {
        correctCount++;
      }
    }

    // Navigate to ProgressPage with correct answers data
    navigate('/progress', {
      state: {
        correctAnswers: correctCount,
        totalQuestions: questions.length,
      }
    });
  };

  return (
    <div className="exercise-container">
      <h1 className="exercise-heading">Exercise Page</h1>
      {loading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">Error: {error}</p>}
      {!loading && questions.length > 0 && (
        <div>
          {questions.map((question, index) => (
            <div className="question-container" key={index}>
              <h3 className="question-text">Question {index + 1}: {question.text}</h3>
              <ul className="options-list">
                {question.options.map((option, optionIndex) => (
                  <li className="option-item" key={optionIndex}>
                    <label className="option-label">
                      <input
                        type="radio"
                        name={`question${index}`} // Unique name for each radio group
                        value={option.answer}
                        checked={selectedAnswers[index]?.answer === option.answer}
                        onChange={() => handleAnswerChange(index, option.answer, option.isCorrect)}
                      />
                      {option.answer}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button className="submit-button" onClick={handleSubmit}>Submit Answers</button>
        </div>
      )}

      <button className="navigation-button" onClick={() => goToPrevious()}>Previous</button>
      {/* Assuming Next button is disabled as it's the last page */}
      <button className="navigation-button" disabled>Next</button>
    </div>
  );
};

export default ExercisePage;
