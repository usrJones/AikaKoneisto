const express = require('express');
const { getTaskRows } = require("../database");

const router = express.Router();

router.get('/', async (req, res) => {
    console.log('Received GET request');
    try {
        const taskRows = await getTaskRows()
        console.log('Delivering task rows');
        res.status(201).send(taskRows);
        console.log(`Delivered ${taskRows.length} task rows successfully`);
    } catch (error) {
        console.error('Error delivering task rows:', error.message);
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
