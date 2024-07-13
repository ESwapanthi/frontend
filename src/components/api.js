import axios from 'axios';

const API = axios.create({
  baseURL: 'https://backend-dn2k.onrender.com/api'
});
export const login = (userData) => API.post('/auth/login', userData)
  .then(response => response.data)
  .catch(error => {
    // Handle error
    console.error('Error logging in:', error);
    throw error; // Rethrow or handle further as needed
  });

export const signup = (userData) => API.post('/auth/signup', userData)
  .then(response => response.data)
  .catch(error => {
    // Handle error
    console.error('Error signing up:', error);
    throw error; // Rethrow or handle further as needed
  });
