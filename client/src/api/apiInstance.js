import axios from 'axios';

const baseURL = 'http://localhost:5000';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});

export default axiosInstance;
