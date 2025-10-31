import { Link, Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <>
      <div className="mt-2 mb-5">
        Link to: <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
      </div>
      <h1>Dashboard</h1>
      <Outlet />
    </>
  );
}

export default Dashboard;
