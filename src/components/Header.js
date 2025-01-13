// File: src/components/Header.js

import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Header.css";

function Header() {
  return (
    <header className="app-header">
      <h1>News Distribution System</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/daily-report">Daily Report</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </header>
  );
}

export default Header;
