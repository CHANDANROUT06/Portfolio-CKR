import React from "react";
import { Link } from "react-router-dom";

export default function JobCard({ title, company }) {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>{company}</p>

      <Link to="/job/1">
        <button>View</button>
      </Link>
    </div>
  );
}








