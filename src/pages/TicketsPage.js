// File: src/pages/TicketsPage.js

import React from "react";
import "./../styles/TicketsPage.css";

function TicketsPage() {
  const mockTickets = [
    { id: 1, issue: "Production Problem", status: "Pending" },
    { id: 2, issue: "Distribution Delay", status: "Resolved" },
    { id: 3, issue: "Other", status: "In Progress" },
  ];

  return (
    <div className="tickets-page">
      <h1>Tickets</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Issue</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockTickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.issue}</td>
              <td>{ticket.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TicketsPage;
