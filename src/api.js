import axios from 'axios';

const API = axios.create({ baseURL: 'https://backend-dn2k.onrender.com/api' });

export const login = (userData) => API.post('/auth/login', userData);
export const signup = (userData) => API.post('/auth/signup', userData);
