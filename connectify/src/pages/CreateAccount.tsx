import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

type CreateAccountProps = {
  onLogin: (email: string) => void;
};

export default function CreateAccount({ onLogin }: CreateAccountProps) {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleCreateAccount(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    onLogin(email);
    navigate("/app/profile");
  }

  return (
    <div className="container-fluid py-5 d-flex justify-content-center">
      <div className="mx-auto" style={{ maxWidth: "480px" }}>
        <h1 className="mb-3">Create Account</h1>
        <p className="text-muted">Create your Connectify account.</p>

        <form onSubmit={handleCreateAccount} className="card p-4 shadow-sm">
          <div className="mb-3">
            <label htmlFor="create-name" className="form-label">
              Full Name
            </label>
            <input
              id="create-name"
              type="text"
              className="form-control"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="create-email" className="form-label">
              Email
            </label>
            <input
              id="create-email"
              type="email"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="create-password" className="form-label">
              Password
            </label>
            <input
              id="create-password"
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
            Create Account
          </button>

          <p className="mt-3 mb-0">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}