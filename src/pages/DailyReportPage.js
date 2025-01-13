// File: src/pages/DailyReportPage.js

import React from "react";
import ReportChart from "../components/ReportChart";

function DailyReportPage() {
  const data = {
    labels: ["Produced", "Sold", "Unsold", "Wasted"],
    datasets: [
      {
        label: "Daily Data",
        data: [500, 400, 80, 20],
        backgroundColor: ["#4caf50", "#2196f3", "#ffc107", "#f44336"],
      },
    ],
  };

  return (
    <div className="daily-report-page">
      <h1>Daily Report</h1>
      <ReportChart chartData={data} title="Daily Newspaper Report" />
    </div>
  );
}

export default DailyReportPage;
