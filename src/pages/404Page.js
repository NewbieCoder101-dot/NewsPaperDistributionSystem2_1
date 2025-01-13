// File: src/pages/404Page.js

import React from "react";
import "./../styles/404Page.css";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="home-link">
        Go Back to Home
      </a>
    </div>
  );
}

export default NotFoundPage;
