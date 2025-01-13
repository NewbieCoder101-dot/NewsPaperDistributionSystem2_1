// File: src/services/apiService.js

import axios from "axios";

// API Base URL
const API_BASE_URL = "https://api.yourservice.com";

// Generic GET function to fetch data
export const getData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Error in GET request:", error);
    throw error;
  }
};

// Generic POST function to send data
export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error);
    throw error;
  }
};

// Generic PUT function to update data
export const putData = async (endpoint, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error("Error in PUT request:", error);
    throw error;
  }
};

// Generic DELETE function to remove data
export const deleteData = async (endpoint) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Error in DELETE request:", error);
    throw error;
  }
};
