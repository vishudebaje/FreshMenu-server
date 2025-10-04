import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = ({ isRegister: initialIsRegister = false }) => {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(initialIsRegister);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    setError('');
    setIsRegister(!isRegister);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (isRegister) {
      if (!formData.name) {
        setError('Name is required for registration');
        setLoading(false);
        return;
      }
      const res = await register(formData.name, formData.email, formData.password);
      if (!res.success) {
        setError(res.message);
      } else {
        navigate('/');
      }
    } else {
      const res = await login(formData.email, formData.password);
      if (!res.success) {
        setError(res.message);
      } else {
        navigate('/');
      }
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <h2>{isRegister ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
        )}
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>{loading ? 'Please wait...' : (isRegister ? 'Register' : 'Login')}</button>
      </form>
      <p>
        {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button onClick={toggleMode}>{isRegister ? 'Login' : 'Register'}</button>
      </p>
    </div>
  );
};

export default Login;
