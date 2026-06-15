import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,

  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercept outgoing requests and inject Bearer authorization token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('kiwiclicks_admin_token') || sessionStorage.getItem('kiwiclicks_admin_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
export { API_BASE_URL };
