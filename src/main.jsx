import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ✅ This is the built Tailwind CSS output
import '../dist/output.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
