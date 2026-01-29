import express from "express";
import db from "../config/db.js";

const router = express.Router();

/* Get jobs */
router.get("/", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM jobs ORDER BY created_at DESC");
  res.json(rows);
});

/* Post job */
router.post("/", async (req, res) => {
  const { title, company, location, type, description } = req.body;

  await db.query(
    "INSERT INTO jobs (title, company, location, type, description) VALUES (?,?,?,?,?)",
    [title, company, location, type, description]
  );

  res.json({ message: "Job created" });
});

export default router;
