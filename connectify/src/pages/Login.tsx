import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

type LoginProps = {
  onLogin: (email: string) => void;
};

export default function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!email.trim() || !password.trim()) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    onLogin(email);
    navigate("/app/profile");
  }

  return (
    <div className="container-fluid py-5 d-flex justify-content-center">
          <div className="mx-auto" style={{ maxWidth: "480px" }}>
        <h1 className="mb-3">Login</h1>
        <p className="text-muted">Sign in to your Connectify account.</p>

        <form onSubmit={handleLogin} className="card p-4 shadow-sm">
          <div className="mb-3">
            <label htmlFor="login-email" className="form-label">
              Email
            </label>
            <input
              id="login-email"
              type="email"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="login-password" className="form-label">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          {errorMessage && (
            <div className="alert alert-danger py-2" role="alert">
              {errorMessage}
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            Login
          </button>

          <p className="mt-3 mb-0">
            Need an account? <Link to="/create-account">Create one</Link>
          </p>
        </form>
      </div>
    </div>
  );
}