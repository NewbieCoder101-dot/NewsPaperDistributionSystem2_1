// File: src/pages/ReportsPage.js

import React from "react";
import ChartComponent from "../components/ChartComponent";
import "./../styles/ReportsPage.css";

function ReportsPage() {
  // Example report data
  const reportData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Total Papers Sold",
        data: [3000, 3200, 3100, 3050],
        backgroundColor: "#2ecc71",
      },
      {
        label: "Total Papers Unsold",
        data: [200, 180, 150, 170],
        backgroundColor: "#e74c3c",
      },
    ],
  };

  return (
    <div className="reports-page">
      <h1>Reports</h1>
      <p>View summarized sales and production statistics.</p>
      <div className="chart-container">
        <ChartComponent data={reportData} />
      </div>
    </div>
  );
}

export default ReportsPage;
