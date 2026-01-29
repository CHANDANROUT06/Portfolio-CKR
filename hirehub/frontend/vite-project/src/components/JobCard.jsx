import { Link } from "react-router-dom";

export default function JobCard({ job, onApply, loading }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>

      <button
        className="apply-btn"
        onClick={() => onApply(job)}
        disabled={loading}
      >
        {loading ? "Applying..." : "Apply"}
      </button>
    </div>
  );
}




const styles = {
  card: {
    padding: "20px",
    margin: "20px 0",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
};

