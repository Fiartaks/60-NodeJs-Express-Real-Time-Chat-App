import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // App bileşenini import et

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* App bileşenini render et */}
  </React.StrictMode>,
);