import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
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
