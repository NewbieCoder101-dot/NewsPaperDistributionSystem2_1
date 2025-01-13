// File: src/pages/WeeklyReportPage.js

import React from "react";
import ReportChart from "../components/ReportChart";

function WeeklyReportPage() {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Sold Papers",
        data: [350, 400, 450, 420, 380, 390, 410],
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
      {
        label: "Unsold Papers",
        data: [50, 40, 30, 35, 45, 40, 50],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
    ],
  };

  return (
    <div className="weekly-report-page">
      <h1>Weekly Report</h1>
      <ReportChart chartData={data} title="Weekly Newspaper Report" />
    </div>
  );
}

export default WeeklyReportPage;
