// File: src/hooks/useAuth.js

import { useState } from "react";
import { useHistory } from "react-router-dom";

const useAuth = () => {
  const [user, setUser] = useState(null); // To track the user
  const history = useHistory();

  // Simulating a login function
  const login = (username, password) => {
    // Logic to authenticate the user (e.g., API call)
    if (username === "admin" && password === "password123") {
      setUser({ username });
      history.push("/admin-dashboard"); // Redirect after login
    } else {
      alert("Invalid credentials");
    }
  };

  // Simulating a logout function
  const logout = () => {
    setUser(null);
    history.push("/"); // Redirect to home page
  };

  return {
    user,
    login,
    logout,
  };
};

export default useAuth;
