import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container py-5">
      <div className="p-5 bg-light rounded-3">
        <h1 className="display-5 fw-bold">Connectify</h1>
        <p className="col-md-8 fs-5">
          Find classmates, build study groups, and request help for your classes.
        </p>
        <Link className="btn btn-primary btn-lg" to="/app/profile">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}