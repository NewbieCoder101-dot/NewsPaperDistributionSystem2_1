// File: src/components/DashboardSidebar.js

import React from "react";
import { Link } from "react-router-dom";
import "./../styles/DashboardSidebar.css";

function DashboardSidebar() {
  return (
    <div className="dashboard-sidebar">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/who-we-sell-to">Who We Sell To</Link>
        </li>
        <li>
          <Link to="/tickets">Tickets</Link>
        </li>
      </ul>
    </div>
  );
}

export default DashboardSidebar;
