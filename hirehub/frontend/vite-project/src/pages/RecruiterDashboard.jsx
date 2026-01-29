import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css"

import { useJobs } from "../context/JobContext";

function RecruiterDashboard() {
  const { appliedJobs } = useJobs();

  return (
    <div className="dashboard">
      <h2>Recruiter Dashboard</h2>

      {appliedJobs.length === 0 ? (
        <p>No jobs applied yet</p>
      ) : (
        appliedJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default RecruiterDashboard;








/*export default function RecruiterDashboard() {
  // TEMP data (later replaced by API)
  const applications = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "HireHub",
      location: "Remote",
      status: "Applied",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "TechCorp",
      location: "Bangalore",
      status: "Shortlisted",
    },
  ];

  return (
    <div className="dashboard-page">
      <h1>Recruiter Dashboard</h1>
      <p className="dashboard-subtitle">
        Overview of job applications
      </p>

      {applications.length === 0 ? (
        <p className="empty-text">No jobs applied yet</p>
      ) : (
        <div className="dashboard-grid">
          {applications.map((app) => (
            <div key={app.id} className="dashboard-card">
              <h3>{app.title}</h3>
              <p>{app.company}</p>
              <span>{app.location}</span>
              <div className={`status ${app.status.toLowerCase()}`}>
                {app.status}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );



useEffect(() => {
  axios
    .get("http://localhost:5000/api/applications")
    .then(res => setApplications(res.data))
    .catch(err => console.error(err));
}, []);


}*/