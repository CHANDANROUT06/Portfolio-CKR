import { useState } from "react";
import "./PostJob.css";

export default function PostJob() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Job posted (frontend only)");
    setForm({
      title: "",
      company: "",
      location: "",
      type: "Full-time",
      description: "",
    });
  };

  return (
    <div className="postjob-page">
      <h2>Post a New Job</h2>

      <form className="postjob-form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Job Title</label>
          <input name="title" value={form.title} onChange={handleChange} required />
        </div>

        <div className="field">
          <label>Company</label>
          <input name="company" value={form.company} onChange={handleChange} required />
        </div>

        <div className="row">
          <div className="field">
            <label>Location</label>
            <input name="location" value={form.location} onChange={handleChange} required />
          </div>

          <div className="field">
            <label>Job Type</label>
            <select name="type" value={form.type} onChange={handleChange}>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label>Description</label>
          <textarea
            name="description"
            rows="5"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>

        <button className="submit-btn">Post Job</button>
      </form>
    </div>
  );
}