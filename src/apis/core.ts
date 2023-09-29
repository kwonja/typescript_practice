import axios from 'axios';
import { getLocalStorageToken } from '../utils/auth';

export const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';
// export const BASE_URL = 'http://localhost:8000/';

//axios config
const config = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};
export const api = axios.create(config);
export const Authapi = axios.create(config);

Authapi.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${getLocalStorageToken()}`;
  return config;
});
