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

//get all data
app.get("/", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(`SELECT * from ${process.env.TABLE_NAME}`);
    res.status(200).json(rows);
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
});

// add to database
app.post("/", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const { name, type, tier, notes, completed } = req.body;
    const result = await conn.query(
      `INSERT INTO ${process.env.TABLE_NAME}(map_name,map_type,map_tier,map_notes,map_completed) values (?,?,?,?,?)`,
      [name, type, tier, notes, completed]
    );

    // const test = JSON.stringify(result, (key, value) =>
    //   typeof value === "bigint" ? value.toString() + "n" : value
    // );

    res.status(200).json({ message: "data inserted" });
  } catch (e) {
    res.status(400).send(e.message);
  } finally {
    if (conn) return conn.end();
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Listening for requests on port ${process.env.PORT}`);
});
