// File: src/components/TicketList.js

import React from "react";
import "./../styles/TicketList.css";

function TicketList() {
  const tickets = [
    { id: 1, issue: "Distribution Delay", status: "Pending" },
    { id: 2, issue: "Wrong Count Delivered", status: "Resolved" },
    { id: 3, issue: "Damaged Papers", status: "In Progress" },
  ];

  return (
    <div className="ticket-list">
      <h2>Tickets</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Issue</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
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

export default TicketList;
