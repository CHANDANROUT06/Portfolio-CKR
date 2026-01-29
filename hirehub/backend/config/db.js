import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "chandan@2003",
  database: "hirehub"
});

export default db;
