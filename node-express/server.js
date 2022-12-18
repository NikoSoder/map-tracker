const express = require("express");
const mariadb = require("mariadb");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config({ path: ".env" });

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5,
});

app.listen(3000, () => {
  console.log(`Listening for requests on port ${process.env.PORT}`);
});
