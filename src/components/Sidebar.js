// File: src/components/Sidebar.js

import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/reports" activeClassName="active">Reports</NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active">Settings</NavLink>
          </li>
          <li>
            <NavLink to="/tickets" activeClassName="active">Tickets</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
