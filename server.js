const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());

const status = require('./routes/status');

app.use('/status', status);

app.listen(3000, () => {
    console.log("yes 3000")
})

app.get("/", (req, res) => {
    res.send("nothing to see here")
})