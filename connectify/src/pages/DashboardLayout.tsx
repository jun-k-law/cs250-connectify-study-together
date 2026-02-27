import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="container py-4">
      <Outlet />
    </div>
  );
}