import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">HireHub</Link>
      </div>

      <div className="nav-links">
        <Link to="/jobs">Jobs</Link>
        <Link to="/post-job">Post Job</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/auth" >
  Login 
</Link>

      </div>
    </nav>
  );
}