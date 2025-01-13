// File: src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProducerDashboard from "./pages/ProducerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import MainDistributorDashboard from "./pages/MainDistributorDashboard";
import SubDistributorDashboard from "./pages/SubDistributorDashboard";
import RetailerDashboard from "./pages/RetailerDashboard";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import TicketsPage from "./pages/TicketsPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Sidebar Component */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="content">
          <Routes>
            <Route path="/" element={<ProducerDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/main-distributor" element={<MainDistributorDashboard />} />
            <Route path="/sub-distributor" element={<SubDistributorDashboard />} />
            <Route path="/retailer" element={<RetailerDashboard />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
