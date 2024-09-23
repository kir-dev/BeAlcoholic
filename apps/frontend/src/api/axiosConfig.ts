import axios, { AxiosHeaders } from 'axios';
import Cookies from 'js-cookie';

export const axiosConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

axiosConfig.interceptors.request.use((config) => {
  const token = Cookies.get('jwt');
  if (token && config.headers) {
    (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
  }

  return config;
});
