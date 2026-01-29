import { createContext, useContext, useState } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const applyJob = (job) => {
    setAppliedJobs((prev) => {
      const alreadyApplied = prev.find((j) => j.id === job.id);
      if (alreadyApplied) return prev;
      return [...prev, job];
    });
  };

  return (
    <JobContext.Provider value={{ appliedJobs, applyJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => useContext(JobContext);
