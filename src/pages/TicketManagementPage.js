// File: src/pages/TicketManagementPage.js

import React, { useState } from "react";
import "./../styles/TicketManagementPage.css";

function TicketManagementPage() {
  const [tickets, setTickets] = useState([
    { id: 1, user: "John Doe", issue: "Login issue", status: "Open" },
    { id: 2, user: "Jane Smith", issue: "Data not loading", status: "In Progress" },
    { id: 3, user: "Michael Brown", issue: "Incorrect report", status: "Resolved" },
  ]);

  const updateStatus = (id, newStatus) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === id ? { ...ticket, status: newStatus } : ticket
      )
    );
  };

  return (
    <div className="ticket-management-page">
      <h1>Ticket Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Issue</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.user}</td>
              <td>{ticket.issue}</td>
              <td>{ticket.status}</td>
              <td>
                {ticket.status !== "Resolved" && (
                  <button onClick={() => updateStatus(ticket.id, "Resolved")}>
                    Mark as Resolved
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TicketManagementPage;
