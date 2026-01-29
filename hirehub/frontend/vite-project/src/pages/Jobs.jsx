import { useEffect, useState } from "react";
import { useJobs } from "../context/JobContext";

import axios from "axios";

import "./Jobs.css";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // TEMP: static jobs (fast + stable)
    setJobs([
      {
        id: 1,
        title: "Frontend Developer",
        company: "TechCorp",
        location: "Remote",
        type: "Full Time",
      },
      {
        id: 2,
        title: "Backend Engineer",
        company: "CloudNova",
        location: "Bangalore",
        type: "Full Time",
      },
      {
        id: 3,
        title: "DevOps Engineer",
        company: "InfraWorks",
        location: "Hybrid",
        type: "Contract",
      },
    ]);
  }, []);

 /* const { applyJob } = useJobs();*/


  const applyJob = (id) => {
    alert("Applied successfully ");
  };

  return (
    <div className="jobs-page">
      <h1>Available Jobs</h1>
      <p className="subtitle">Explore opportunities that match your skills</p>

      <div className="jobs-grid">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h3>{job.title}</h3>
            <p className="company">{job.company}</p>

            <div className="job-meta">
              <span>{job.location}</span>
              <span>{job.type}</span>
            </div>

            <button onClick={() => applyJob(job)}
              className="apply-btn">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}