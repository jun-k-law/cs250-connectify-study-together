import "bootswatch/dist/minty/bootstrap.min.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

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
