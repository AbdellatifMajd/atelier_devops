const express = require("express");
const mysql = require("mysql2");

const app = express();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("MySQL connecté");
});

app.get("/", (req, res) => {
  res.send("App fonctionne avec MySQL");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});