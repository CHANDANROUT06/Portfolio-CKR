import express from "express";
import db from "../db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { job_id, user_id } = req.body;

  await db.query(
    "INSERT INTO applications (job_id, user_id) VALUES (?,?)",
    [job_id, user_id]
  );

  res.json({ message: "Applied successfully" });
});

export default router;