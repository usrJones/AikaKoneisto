const express = require('express');
const { getTaskRows } = require("../database");

const router = express.Router();

router.get('/', async (req, res) => {
    const taskRows = await getTaskRows()
    res.send(taskRows)
});

module.exports = router;
