const express = require("express");
const path = require("path");
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

app.use(express.static(path.join(__dirname, '../public')));

app.get("/", async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('select * from messages');
        const messages = rows.map(row => row.text).join('<br>');
        res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
            if (err) {
                res.status(500).send("virhe");
                } else {
                    res.send(messages);
                    }
                    });
    } catch (err) {
        console.error('vrihe', err);
        res.status(500).send("tieto");
    } finally {
        if (conn) conn.release();
    }
});

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});
