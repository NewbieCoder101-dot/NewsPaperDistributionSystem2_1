// File: src/routes.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/AdminDashboard";
import RaiseTicketPage from "./pages/RaiseTicketPage";
import WhoWeSellToPage from "./pages/WhoWeSellToPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/404Page";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/raise-ticket" component={RaiseTicketPage} />
        <Route path="/who-we-sell-to" component={WhoWeSellToPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route component={NotFoundPage} /> {/* Default route if no match */}
      </Switch>
    </Router>
  );
}

export default Routes;
