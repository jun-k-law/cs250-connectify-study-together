import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Testing from './test.jsx'

// import 
// // import { useState } from 'react';
// // import { createRoot } from 'react-dom/client';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Testing/>
  </StrictMode>,
);
