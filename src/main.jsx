// index.jsx (or main.jsx)
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Ensure BrowserRouter is here
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter future={{ v7_startTransition: true }}>
  <App />
</BrowserRouter>
  </StrictMode>
);
