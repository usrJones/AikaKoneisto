const express = require("express");
const cors = require("cors");

const getTaskRows = require("./database.js");
const getTaskRow = require("./database.js");
const createTaskRow = require("./database.js");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const status = require('./routes/status');

app.use('/status', status);

app.listen(3000, () => {
    console.log("yes 3000")
})

app.get("/", (req, res) => {
    res.send("nothing to see here")
})

app.get("/taskRows", async (req, res) => {
    const taskRows = await getTaskRows()
    res.send(taskRows)
})
/*
app.get("/taskRow/:id", async (req, res) => {
    const id = req.params.id
    const taskRow = await getTaskRow(id)
    res.send(taskRow)
})

app.post("/taskRow", async (req, res) => {
    const {created_timestamp, start_timestamp, end_timestamp, hour_amount, task, project} = req.body
    const taskRow = await createTaskRow(created_timestamp, start_timestamp, end_timestamp, hour_amount, task, project)
    res.status(201).send(taskRow)
})*/