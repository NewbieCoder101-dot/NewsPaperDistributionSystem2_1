// File: src/components/ChartComponent.js

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./../styles/ChartComponent.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ChartComponent({ data }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Daily Newspaper Production Stats",
      },
    },
  };

  return (
    <div className="chart">
      <Bar data={data} options={options} />
    </div>
  );
}

export default ChartComponent;
