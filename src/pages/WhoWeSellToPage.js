// File: src/pages/WhoWeSellToPage.js

import React from "react";
import "./../styles/WhoWeSellToPage.css";

function WhoWeSellToPage() {
  const distributors = [
    { name: "John Doe", amount: 5000, location: "Bengaluru" },
    { name: "Jane Smith", amount: 3000, location: "Mysore" },
    { name: "Raj Kumar", amount: 4500, location: "Hubli" },
  ];

  return (
    <div className="who-we-sell-to-page">
      <h1>Who We Sell To</h1>
      <p>Below is the list of main distributors we sell our newspapers to:</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount Sold</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {distributors.map((distributor, index) => (
            <tr key={index}>
              <td>{distributor.name}</td>
              <td>{distributor.amount}</td>
              <td>{distributor.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WhoWeSellToPage;
