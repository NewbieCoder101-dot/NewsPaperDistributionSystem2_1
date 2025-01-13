// File: src/pages/UserManagementPage.js

import React, { useState } from "react";
import "./../styles/UserManagementPage.css";

function UserManagementPage() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin", email: "john@example.com" },
    { id: 2, name: "Jane Smith", role: "Producer", email: "jane@example.com" },
    { id: 3, name: "Michael Brown", role: "Main Distributor", email: "michael@example.com" },
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="user-management-page">
      <h1>User Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagementPage;
