import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-type': 'applicaton/json',
  },
});