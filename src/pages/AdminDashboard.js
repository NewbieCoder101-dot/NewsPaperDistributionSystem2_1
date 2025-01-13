// File: src/pages/AdminDashboard.js

import React from "react";
import "./../styles/AdminDashboard.css";

function AdminDashboard() {
  const users = [
    { id: 1, role: "Producer", name: "John Producer", email: "john@news.com" },
    { id: 2, role: "Main Distributor", name: "Alice Distributor", email: "alice@news.com" },
    { id: 3, role: "Sub Distributor", name: "Bob Sub", email: "bob@news.com" },
    { id: 4, role: "Retailer", name: "Charlie Retailer", email: "charlie@news.com" },
  ];

  const tickets = [
    { id: 1, issue: "Late delivery", status: "Pending", raisedBy: "Alice Distributor" },
    { id: 2, issue: "Damaged papers", status: "Resolved", raisedBy: "Bob Sub" },
  ];

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <section>
        <h2>All Users</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Role</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.role}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h2>Raised Tickets</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Raised By</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.issue}</td>
                <td>{ticket.status}</td>
                <td>{ticket.raisedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default AdminDashboard;
