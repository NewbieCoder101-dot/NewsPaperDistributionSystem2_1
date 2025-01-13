// File: src/components/ReportCard.js

import React from "react";
import "./../styles/ReportCard.css";

function ReportCard({ title, value, description }) {
  return (
    <div className="report-card">
      <h2>{title}</h2>
      <p className="value">{value}</p>
      <p className="description">{description}</p>
    </div>
  );
}

export default ReportCard;
