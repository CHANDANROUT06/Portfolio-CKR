import db from "../db.js";

export const applyJob = (req, res) => {
  const { job_id, job_title, company, applicant_email } = req.body;

  const sql = `
    INSERT INTO applications (job_id, job_title, company, applicant_email)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [job_id, job_title, company, applicant_email], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Application submitted successfully" });
  });
};

export const getApplications = (req, res) => {
  db.query("SELECT * FROM applications", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

export const deleteApplication = (req, res) => {
  db.query(
    "DELETE FROM applications WHERE id = ?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Application removed" });
    }
  );
};
