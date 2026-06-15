import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api/client';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const useAdminAuth = () => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const checkAuth = async () => {
    const token = localStorage.getItem('kiwiclicks_admin_token') || sessionStorage.getItem('kiwiclicks_admin_token');
    
    if (!token) {
      setUser(null);
      setLoading(false);
      return false;
    }

    try {
      const response = await apiClient.get('/auth/me');
      if (response.data.status === 'success') {
        setUser(response.data.data.user);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error('Check auth failed:', error);
      // Purge invalid/expired credentials
      localStorage.removeItem('kiwiclicks_admin_token');
      sessionStorage.removeItem('kiwiclicks_admin_token');
      setUser(null);
    }
    setLoading(false);
    return false;
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (email: string, password: string, remember: boolean) => {
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      if (response.data.status === 'success') {
        const { token, data } = response.data;
        
        if (remember) {
          localStorage.setItem('kiwiclicks_admin_token', token);
        } else {
          sessionStorage.setItem('kiwiclicks_admin_token', token);
        }

        setUser(data.user);
        return { success: true };
      }
    } catch (error: any) {
      const message = error.response?.data?.message || 'Login failed. Please check your credentials.';
      return { success: false, message };
    }
    return { success: false, message: 'An unexpected error occurred.' };
  };

  const logout = () => {
    localStorage.removeItem('kiwiclicks_admin_token');
    sessionStorage.removeItem('kiwiclicks_admin_token');
    setUser(null);
    navigate('/admin/login');
  };

  return {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
    checkAuth,
  };
};

export default useAdminAuth;
