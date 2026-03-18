import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Connect from "./pages/Connect";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import DashboardLayout from "./pages/DashboardLayout";

const AUTH_KEY = "connectify-auth";
const USER_EMAIL_KEY = "connectify-user-email";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [, setUserEmail] = useState("");

  useEffect(() => {
    const savedAuth = localStorage.getItem(AUTH_KEY) === "true";
    const savedEmail = localStorage.getItem(USER_EMAIL_KEY) ?? "";

    setIsAuthenticated(savedAuth);
    setUserEmail(savedEmail);
  }, []);

  function handleLogin(email: string) {
    localStorage.setItem(AUTH_KEY, "true");
    localStorage.setItem(USER_EMAIL_KEY, email);
    setIsAuthenticated(true);
    setUserEmail(email);
  }

  function handleLogout() {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(USER_EMAIL_KEY);
    setIsAuthenticated(false);
    setUserEmail("");
  }

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <NavBar isAuthenticated={isAuthenticated} onLogout={handleLogout} />

        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/app/profile" replace />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />

            <Route
              path="/create-account"
              element={
                isAuthenticated ? (
                  <Navigate to="/app/profile" replace />
                ) : (
                  <CreateAccount onLogin={handleLogin} />
                )
              }
            />

            <Route
              path="/app"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="profile" replace />} />
              <Route path="profile" element={<Profile />} />
              <Route path="connect" element={<Connect />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}