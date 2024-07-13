import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const login = (userData) => API.post('/auth/login', userData);
export const signup = (userData) => API.post('/auth/signup', userData);
