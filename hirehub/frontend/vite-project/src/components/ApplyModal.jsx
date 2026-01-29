import { useJobs } from "../context/JobContext";
import { useState } from "react";

export default function ApplyModal({ job, close }) {
  const { applyJob } = useJobs();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = () => {
    if (!name || !email) return alert("Fill all fields");
    applyJob(job, { name, email });
    alert("Applied successfully!");
    close();
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2>Apply for {job.title}</h2>

        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={input}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <button onClick={submit} style={btn}>Submit</button>
        <button onClick={close} style={btnOutline}>Cancel</button>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const modal = {
  background: "#fff",
  padding: "30px",
  borderRadius: "8px",
  width: "350px"
};

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px"
};

const btn = {
  width: "100%",
  padding: "10px",
  background: "#16a34a",
  color: "#fff",
  border: "none",
  marginBottom: "8px"
};

const btnOutline = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc"
};
