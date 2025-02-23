const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());

const route = require('./routes/main');

app.use('/main', route);

app.listen(3000, () => {
    console.log("yes 3000")
})

app.get("/", (req, res) => {
    res.send("ah")
})