// File: src/pages/RaiseTicketPage.js

import React, { useState } from "react";
import "./../styles/RaiseTicketPage.css";

function RaiseTicketPage() {
  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ticket raised successfully!\nIssue: ${issue}\nDescription: ${description}`);
    setIssue("");
    setDescription("");
  };

  return (
    <div className="raise-ticket-page">
      <h1>Raise a Ticket</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="issue">Issue:</label>
          <input
            type="text"
            id="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            placeholder="Enter issue title"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
}

export default RaiseTicketPage;
