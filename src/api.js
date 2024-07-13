import axios from 'axios';

const API = axios.create({ baseURL: 'https://mern-backend-1-lg1g.onrender.com' });

export const login = (userData) => API.post('/auth/login', userData);
export const signup = (userData) => API.post('/auth/signup', userData);
