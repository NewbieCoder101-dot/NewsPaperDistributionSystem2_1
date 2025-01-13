// File: src/services/reportService.js

import { getData } from "./apiService";

// Function to get report data
export const getReportData = async (reportType) => {
  try {
    const report = await getData(`reports/${reportType}`); // Example: replace with your API endpoint
    return report;
  } catch (error) {
    console.error("Error fetching report data:", error);
    throw error;
  }
};
