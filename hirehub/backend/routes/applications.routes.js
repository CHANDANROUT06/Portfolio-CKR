import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { job_id } = req.body;

  await db.query(
    "INSERT INTO applications (job_id) VALUES (?)",
    [job_id]
  );

  res.json({ message: "Application saved" });
});

export default router;