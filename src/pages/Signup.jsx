import React, { useState } from 'react';
import { auth, db } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('doctor');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', userCred.user.uid), {
        email,
        role,
        icuId: role === 'icu_head' ? '' : null
      });
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
        style={{ width: "100%", maxWidth: "420px", borderRadius: "12px" }}
      >
        <h3 className="text-center mb-4" style={{ fontWeight: "600" }}>
          Signup
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

          <div className="mb-3">
            <select 
              className="form-control" 
              value={role} 
              onChange={(e) => setRole(e.target.value)} 
              style={{ padding: "12px" }}
            >
              <option value="doctor">Doctor</option>
              <option value="icu_head">ICU Head</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button 
            className="btn btn-success w-100" 
            type="submit"
            style={{ padding: "12px", fontWeight: "500" }}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
