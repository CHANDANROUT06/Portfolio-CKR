import React, { createContext, useState } from "react";

export const JobContext = createContext();

export function JobProvider({ children }) {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const applyJob = (job) => {
    setAppliedJobs([...appliedJobs, job]);
  };

  return (
    <JobContext.Provider value={{ appliedJobs, applyJob }}>
      {children}
    </JobContext.Provider>
  );
}
