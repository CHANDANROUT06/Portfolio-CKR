import React from "react";
import { Link } from "react-router-dom";

export default function DashboardSidebar() {
  return (
    <div className="dashboard-sidebar">
      <h2 className="sidebar-logo">HireHub</h2>

      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/jobs">Find Jobs</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
        <li><Link to="/">Logout</Link></li>
        <li><Link to="/applied-jobs">Applied Jobs</Link></li>

      </ul>
    </div>
  );
}
