import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 
import "./Navbar.css";
import logo from './navlogo.jpg';

function Navbar() {
  const { currentUser, logout, userData } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      alert("Error logging out");
    }
  };

  return (
    <nav className="navbar">
      <img className="logo_section" src={logo} alt="logo" />

      <div className="links">
        <Link to="/">Home</Link>

        {currentUser && (
          <>
            {/* Common link for all logged-in users */}
            <Link to="/comments">Comments</Link>

            {/* Doctor options */}
            {userData?.role === "doctor" && (
              <>
                <Link to="/list">Patient List</Link>
                <Link to="/comments">My Patients</Link>
                <Link to="/add-patient">Add Patient</Link>
              </>
            )}

            {/* ICU Head options */}
            {userData?.role === "icu_head" && (
              <>
                <Link to="/icu-patients">ICU Patients</Link>
                <Link to="/manage-icu">Manage ICU</Link>
              </>
            )}

            {/* Admin options */}
            {userData?.role === "admin" && (
              <>
                <Link to="/add-patient">Add Patient</Link>
                <Link to="/add-allotment">Add Allotment</Link>
                <Link to="/manage-doctors">Manage Doctors</Link>
                <Link to="/admin">Admin Dashboard</Link>
                <Link to="/medical">Medical Dashboard</Link>
                <Link to="/list">My Patient</Link>
              </>
            )}

            <button className="btn logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

        {!currentUser && (
          <>
            <Link to="/login" className="btn login-btn">Login</Link>
            <Link to="/signup" className="btn signup-btn">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
