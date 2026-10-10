import React, { useContext, useState } from "react";

const AuthContext = React.createContext(null);
const SESSION_KEY = "patient-care-demo-session";

function readSavedSession() {
  try {
    const savedSession = window.localStorage.getItem(SESSION_KEY);
    return savedSession ? JSON.parse(savedSession) : null;
  } catch {
    return null;
  }
}

function makeDemoUser(email, role = "doctor", icuId = null) {
  return {
    uid: `demo-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    email: email.trim().toLowerCase(),
    role,
    icuId,
  };
}

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readSavedSession);

  function startDemoSession(nextUser) {
    setUser(nextUser);
    try {
      window.localStorage.setItem(SESSION_KEY, JSON.stringify(nextUser));
    } catch {
      // The session still works until the page is refreshed if storage is unavailable.
    }
    return { user: nextUser };
  }

  function signup(email, _password, role = "doctor", icuId = null) {
    return startDemoSession(makeDemoUser(email, role, icuId));
  }

  function login(email, _password) {
    const normalizedEmail = email.trim().toLowerCase();
    const savedUser = user?.email === normalizedEmail ? user : null;
    return startDemoSession(savedUser || makeDemoUser(normalizedEmail));
  }

  function logout() {
    setUser(null);
    try {
      window.localStorage.removeItem(SESSION_KEY);
    } catch {
      // Ignore storage errors; the in-memory session is already cleared.
    }
  }

  const value = {
    currentUser: user,
    userData: user,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
