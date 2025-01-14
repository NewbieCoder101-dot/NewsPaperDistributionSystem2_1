import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Your main app component
import './index.css'; // Your global CSS file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Matches the `id` in public/index.html
);

