// File: src/components/TicketForm.js

import React, { useState } from "react";
import "./../styles/TicketForm.css";

function TicketForm() {
  const [issue, setIssue] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert(`Ticket Raised!\nIssue: ${issue}\nDetails: ${details}`);
    setIssue("");
    setDetails("");
  };

  return (
    <div className="ticket-form">
      <h2>Raise a Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="issue">Issue Type:</label>
          <select
            id="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            required
          >
            <option value="">Select an Issue</option>
            <option value="production">Production Problem</option>
            <option value="distribution">Distribution Issue</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="details">Details:</label>
          <textarea
            id="details"
            rows="4"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
}

export default TicketForm;
