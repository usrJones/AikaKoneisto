const express = require('express');
const { createTaskRow } = require("../database");

const router = express.Router();

router.post('/', async (req, res) => {
    const { created_timestamp, start_timestamp, end_timestamp, hour_amount, task, project } = req.body;
    console.log('Received POST request:', req.body);
    try {
        const taskRow = await createTaskRow(created_timestamp, start_timestamp, end_timestamp, hour_amount, task, project);
        console.log('Task row created:', taskRow);
        res.status(201).send(taskRow);
    } catch (error) {
        console.error('Error creating task row:', error.message);
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
