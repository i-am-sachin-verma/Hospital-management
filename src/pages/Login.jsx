import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate('/');
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center vh-100" 
      style={{ background: "#f8f9fa" }}
    >
      <div 
        className="card p-4 shadow-lg" 
        style={{ width: "100%", maxWidth: "400px", borderRadius: "12px" }}
      >
        <h3 className="text-center mb-4" style={{ fontWeight: "600" }}>
          Login
        </h3>
        <p className="text-center text-muted small mb-4">
          Demo mode: any email and password will work.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input 
              className="form-control" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email" 
              required 
              style={{ padding: "12px" }}
            />
          </div>

          <div className="mb-3">
            <input 
              className="form-control" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password" 
              required 
              style={{ padding: "12px" }}
            />
          </div>

          <button 
            className="btn btn-primary w-100" 
            type="submit"
            style={{ padding: "12px", fontWeight: "500" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
