import axios from 'axios';
import { Platform } from 'react-native';

const defaultApiBaseUrl = Platform.select({
  android: 'http://10.0.2.2:5000',
  default: 'http://localhost:5000',
});

export const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_URL?.trim() ||
  defaultApiBaseUrl ||
  'http://localhost:5000';

const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error?.response ?? error),
);

export default apiClient;
