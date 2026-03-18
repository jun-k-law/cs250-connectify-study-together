import { Link } from "react-router-dom";

export default function Home() {
  return (
<div className="container-fluid py-5 px-4">
        <div className="p-5 bg-light rounded-3">
        <h1 className="display-5 fw-bold">Connectify</h1>
        <p className="col-md-8 fs-5">
          Find classmates, build study groups, and request help for your classes.
        </p>

        <div className="d-flex gap-2 flex-wrap">
          <Link className="btn btn-primary btn-lg" to="/login">
            Login
          </Link>
          <Link className="btn btn-outline-primary btn-lg" to="/create-account">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}