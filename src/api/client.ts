import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

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

// Intercept incoming responses and handle 401 errors by logging out the user
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('kiwiclicks_admin_token');
      sessionStorage.removeItem('kiwiclicks_admin_token');
      // Hard redirect to clear context states and force authentication
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
export { API_BASE_URL };
