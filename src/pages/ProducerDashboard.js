// File: src/pages/ProducerDashboard.js

import React from "react";
import ChartComponent from "../components/ChartComponent";
import "./../styles/Dashboard.css";

function ProducerDashboard() {
  // Mock data for the dashboard
  const productionData = {
    labels: ["Generated", "Sold", "Unsold", "Wasted"],
    datasets: [
      {
        label: "Newspapers (in units)",
        data: [1000, 800, 150, 50], // Example values
        backgroundColor: ["#3498db", "#2ecc71", "#e74c3c", "#f1c40f"],
      },
    ],
  };

  return (
    <div className="dashboard">
      <h1>Producer Dashboard</h1>
      <div className="stats">
        <div>
          <h3>Papers Generated Today</h3>
          <p>1000</p>
        </div>
        <div>
          <h3>Sold Today</h3>
          <p>800</p>
        </div>
        <div>
          <h3>Unsold Today</h3>
          <p>150</p>
        </div>
        <div>
          <h3>Wasted During Production</h3>
          <p>50</p>
        </div>
      </div>
      <div className="chart-container">
        <ChartComponent data={productionData} />
      </div>
    </div>
  );
}

export default ProducerDashboard;
