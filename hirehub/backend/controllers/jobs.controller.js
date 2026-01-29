import db from "../db.js";

export const getJobs = (req, res) => {
  const sql = "SELECT * FROM jobs ORDER BY created_at DESC";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

export const createJob = (req, res) => {
  const { title, company, location, description } = req.body;

  const sql =
    "INSERT INTO jobs (title, company, location, description) VALUES (?, ?, ?, ?)";

  db.query(sql, [title, company, location, description], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Job created" });
  });
};