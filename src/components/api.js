import axios from 'axios';

// Create an Axios instance with a base URL
const API = axios.create({
  baseURL: 'https://backend-2-2tdm.onrender.com/api',
});

// Function to handle login
export const login = (userData) => {
  return API.post('/auth/login', userData)
    .then(response => response.data)
    .catch(error => {
      // Handle error
      console.error('Error logging in:', error);
      throw error; // Rethrow or handle further as needed
    });
};

// Function to handle signup
export const signup = (userData) => {
  return API.post('/auth/signup', userData)
    .then(response => response.data)
    .catch(error => {
      // Handle error
      console.error('Error signing up:', error);
      throw error; // Rethrow or handle further as needed
    });
};
