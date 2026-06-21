import axios from 'axios';

let rawUrl = import.meta.env.VITE_API_URL || '';

if (typeof window !== 'undefined') {
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  if (isLocal) {
    rawUrl = 'http://localhost:5000/api';
  } else {
    if (!rawUrl || rawUrl.includes('localhost') || rawUrl.includes('127.0.0.1')) {
      rawUrl = 'https://create-portfolio-backend.onrender.com/api';
    }
  }
} else {
  if (!rawUrl) {
    rawUrl = 'http://localhost:5000/api';
  }
}

if (rawUrl && !rawUrl.endsWith('/api') && !rawUrl.includes('localhost') && !rawUrl.includes('127.0.0.1')) {
  rawUrl = `${rawUrl}/api`;
}
const API_BASE_URL = rawUrl;

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
