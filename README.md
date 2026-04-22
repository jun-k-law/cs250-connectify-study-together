# Connectify - Study Together
A web application that allows students to form study groups and make friends easily.

Frontend: React, Bootswatch, Motion  
Backend: Supabase

Setup: 

Install Node.js:
- Download the LTS (Long Term Support) version for Windows. This version is stable and recommended for most users.
- Locate the downloaded .msi file and double-click to run it
- Goto: Command prompt or type cmd in window search bar:
- node -v check node version/ if it is installed
- npm -v check npm version/ if it is installed
- npm list check all versions

Install dependencies:
- npm install

Libraries:  

Bootswatch (UI):  
- npm install bootswatch

Motion (UI):
- npm install motion

Supabase (backend):
- npm install @supabase/supabase-js

React Router (page navigation):
- npm install react-router-dom

To run: npm run dev

Important:
- Make sure to include an .env file with (copy and paste info below):
   VITE_SUPABASE_URL=<SUBSTITUTE_SUPABASE_URL>
   VITE_SUPABASE_PUBLISHABLE_KEY=<SUBSTITUTE_SUPABASE_PUBLISHABLE_KEY>
- Make sure everything is up to date (should be these versions or above):
├── @eslint/js@9.39.2  
├── @supabase/supabase-js@2.100.0  
├── @types/react-dom@19.2.3    
├── @types/react@19.2.14  
├── @vitejs/plugin-react@5.1.4  
├── bootswatch@5.3.8    
├── eslint-plugin-react-hooks@7.0.1  
├── eslint-plugin-react-refresh@0.4.26  
├── eslint@9.39.2  
├── globals@16.5.0  
├── motion@12.34.3  
├── react-dom@19.2.4  
├── react-router-dom@7.13.0  
├── react@19.2.4  
└── vite@7.3.1  
- if not, run: npm install react@latest react-dom@latest (for react dom and react only)

All testing was done manually. See midterm handoff document for more information. 
