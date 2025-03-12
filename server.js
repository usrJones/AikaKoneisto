const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const status = require('./routes/status');
const taskRows = require('./routes/taskRows');
const taskRow = require('./routes/taskRow'); // Add this line

app.use('/status', status);
app.use('/taskRows', taskRows);
app.use('/taskRow', taskRow); // Add this line

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
    res.send("nothing to see here");
});