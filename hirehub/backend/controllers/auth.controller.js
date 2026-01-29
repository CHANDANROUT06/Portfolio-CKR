import db from "../db.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );

  res.json({ message: "Signup successful" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const [rows] = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (rows.length === 0) {
    return res.status(401).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, rows[0].password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }

  res.json({
    message: "Login successful",
    user: {
      id: rows[0].id,
      name: rows[0].name,
      email: rows[0].email
    }
  });
};