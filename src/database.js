const express = require("express");
const mariadb = require("mariadb");

const app = express();
const port = 3000;

const pool = mariadb.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "tatata666",
    database: "testdb",
    connectionLimit: 5
});

app.get("/", async (req, res) => {
    let message = "No messages";
    try {
        const conn = await pool.getConnection();
        const rows = await conn.query("SELECT text FROM messages LIMIT 1;")
        message = rows[0]?.text || message;
        conn.release();
    } catch (err) {console.error(err);}
    
    res.send(`<h1>${message}</h1>`);
});

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});
