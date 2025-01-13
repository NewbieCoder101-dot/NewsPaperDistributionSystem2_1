// File: src/pages/MonthlyReportPage.js

import React from "react";
import ReportChart from "../components/ReportChart";

function MonthlyReportPage() {
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: "Produced Papers",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 500 + 400)),
        backgroundColor: "rgba(54, 162, 235, 0.7)",
      },
    ],
  };

  return (
    <div className="monthly-report-page">
      <h1>Monthly Report</h1>
      <ReportChart chartData={data} title="Monthly Newspaper Report" />
    </div>
  );
}

export default MonthlyReportPage;
