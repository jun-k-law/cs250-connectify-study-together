import { useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import supabase from "../SupabaseClient.js";

export default function Login() {
  const goTo = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    // If email confirmations are enabled, user may need to confirm first.
    setMessage("Check your email for confirmation!");

    // If you only want to navigate when a session exists immediately:
    if (data?.session) goTo("/home");
  };

  return (
    <div className="all">
      <div className="card">
        <div className="card-body">
          <h2 className="top">Sign up</h2>

          <form onSubmit={handleSignUp}>
            <div className="login">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <div className="pass">
              <label htmlFor="exampleInputPassword1" className="form-label mt-4">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                autoComplete="off"
              />

              <div className="forgot-password">
                <small id="passHelp" className="form-text text-muted">
                  <u>Forgot password?</u>
                </small>
              </div>
            </div>

            <div className="login-button">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>

            {message && <p className="message">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}