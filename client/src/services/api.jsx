import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/users/login`, { email, password });
  return response.data;
};

export const registerUser = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/users/register`, { name, email, password });
  return response.data;
};