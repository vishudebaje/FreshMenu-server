import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Set up axios interceptor to include token
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('AuthProvider useEffect: token from localStorage:', token);
    if (token) {
      // Decode token to get user info
      try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split('')
            .map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
        );
        const userData = JSON.parse(jsonPayload);
        setUser({ id: userData.userId, token });
        console.log('AuthProvider: user set from decoded token');
      } catch (err) {
        console.error('Error decoding token:', err);
        setUser({ token });
      }
    } else {
      console.log('AuthProvider: no token found');
    }
    setLoading(false);
    console.log('AuthProvider: loading set to false');
  }, []);

  const login = async (email, password) => {
    console.log('AuthProvider login: attempting login for', email);
    try {
      const res = await axios.post('http://localhost:5001/auth/login', { email, password });
      const { token, user: userData } = res.data;
      console.log('AuthProvider login: success, token received', token, userData);
      localStorage.setItem('token', token);
      setUser({ ...userData, token });
      console.log('AuthProvider login: user state updated');
      return { success: true };
    } catch (error) {
      console.log('AuthProvider login: failed', error.response?.data);
      return { success: false, message: error.response?.data?.message || 'Login failed' };
    }
  };

  const register = async (name, email, password) => {
    console.log('AuthProvider register: attempting register for', email);
    try {
      const res = await axios.post('http://localhost:5001/auth/register', { name, email, password });
      const { token, user: userData } = res.data;
      console.log('AuthProvider register: success, token received');
      localStorage.setItem('token', token);
      setUser({ ...userData, token });
      console.log('AuthProvider register: user state updated');
      return { success: true };
    } catch (error) {
      console.log('AuthProvider register: failed', error.response?.data);
      return { success: false, message: error.response?.data?.message || 'Registration failed' };
    }
  };

  const logout = async () => {
    console.log('AuthProvider logout: logging out');
    try {
      await axios.post('http://localhost:5001/auth/logout');
      console.log('AuthProvider logout: server logout success');
    } catch (error) {
      console.error('Logout error:', error);
    }
    localStorage.removeItem('token');
    setUser(null);
    console.log('AuthProvider logout: user state cleared');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
