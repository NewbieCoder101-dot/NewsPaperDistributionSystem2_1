// File: src/services/authService.js

import { postData } from "./apiService";

// Function to handle login
export const loginUser = async (username, password) => {
  const data = { username, password };
  try {
    const response = await postData("login", data); // Example: replace with your API endpoint
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

// Function to handle logout
export const logoutUser = () => {
  // Remove user data from storage (e.g., localStorage, sessionStorage)
  localStorage.removeItem("user");
};

// Function to check if a user is authenticated
export const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};
