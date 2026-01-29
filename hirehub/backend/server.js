const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Database
const db = new sqlite3.Database("hirehub.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("SQLite Database Connected");
  }
});

// Create table
db.run(`
  CREATE TABLE IF NOT EXISTS jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    company TEXT NOT NULL,
    location TEXT NOT NULL
  )
`);

// Test route
app.get("/", (req, res) => {
  res.send("HireHub Backend Running");
});

// Get jobs
app.get("/jobs", (req, res) => {
  db.all("SELECT * FROM jobs", [], (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json(rows);
  });
});

// Add job
app.post("/jobs", (req, res) => {
  const { title, company, location } = req.body;

  db.run(
    "INSERT INTO jobs (title, company, location) VALUES (?, ?, ?)",
    [title, company, location],
    function (err) {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.json({ id: this.lastID });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
