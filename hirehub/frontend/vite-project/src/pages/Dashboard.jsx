import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

export default function Dashboard() {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/applications")
      .then(res => setAppliedJobs(res.data))
      .catch(err => console.error(err));
  }, []);
       
     const withdrawJob = async (jobId) => {
  await axios.delete(`http://localhost:5000/api/applications/${jobId}`);
  setAppliedJobs(prev => prev.filter(job => job.id !== jobId));
};


  return (
    <div className="dashboard">
      <h2>Your Dashboard</h2>

        {appliedJobs.map(job => (
  <div className="applied-card" key={job.id}>
    <h4>{job.title}</h4>
    <p>{job.company}</p>
    <span>{job.location}</span>

    <button
      className="withdraw"
      onClick={() => withdrawJob(job.id)}
    >
      Withdraw
    </button>
  </div>
))}


{appliedJobs.length === 0 ? (
  <p>No jobs applied yet.</p>
) : (
  appliedJobs.map(job => (
    <div className="applied-card" key={job.application_id}>
      <h4>{job.title}</h4>
      <p>{job.company}</p>
      <span>{job.location} • {job.type}</span>

      <button
        className="withdraw"
        onClick={() => withdrawJob(job.id)}
      >
        Withdraw
      </button>
    </div>
  ))
)}








    </div>
  );
}