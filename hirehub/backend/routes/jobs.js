import axios from "axios";
import { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  const applyJob = async (jobId) => {
    try {
      await axios.post("http://localhost:5000/api/apply", {
        job_id: jobId,
        user_id: 1   // temporary user id
      });
      alert("Applied successfully");
    } catch (err) {
      console.error(err);
    }
  };

{jobs.map(job => (
  <div className="job-card" key={job.id}>
    <h3>{job.title}</h3>
    <p>{job.company}</p>
    <p>{job.location}</p>

    <button onClick={() => applyJob(job.id)}>
      Apply
    </button>
  </div>
))}




}