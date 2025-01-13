// File: src/components/RaiseTicketForm.js

import React, { useState } from "react";
import "./../styles/RaiseTicketForm.css";

function RaiseTicketForm() {
  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ticket submitted successfully!");
    setIssue("");
    setDescription("");
  };

  return (
    <div className="raise-ticket-form">
      <h2>Raise a Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="issue">Issue Type:</label>
          <input
            type="text"
            id="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            placeholder="E.g., Distribution Delay"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Provide a detailed description of the issue"
            required
          ></textarea>
        </div>
        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
}

export default RaiseTicketForm;
