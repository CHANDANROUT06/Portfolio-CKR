import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/axios";

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    API.get(`/jobs/${id}`)
      .then((res) => setJob(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={job.image || "https://source.unsplash.com/800x300/?office"}
        className="w-full h-60 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">{job.title}</h1>
      <p className="text-gray-600">{job.company}</p>

      <p className="mt-4">{job.description}</p>

      <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg">
        Apply for this Job
      </button>
    </div>
  );
}
