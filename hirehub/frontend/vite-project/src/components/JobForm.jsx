import { useState } from "react";
import { createJob } from "../services/api";

export default function JobForm({ onJobAdded }) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createJob(form);
    setForm({ title: "", company: "", location: "" });
    onJobAdded();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold">Post a Job</h2>

      <input
        name="title"
        placeholder="Job Title"
        value={form.title}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="company"
        placeholder="Company Name"
        value={form.company}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Submit Job
      </button>
    </form>
  );
}
