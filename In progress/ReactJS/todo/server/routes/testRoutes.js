const router = require('express').Router();
const { poolPromise, sql } = require('../sql/db');
const { getTestData } = require('../models/testModel');

router.get('/', async (req, res) => {
    try {
        const data = await getTestData();
        res.json(data);
    } catch (err) {
        res.status(500).send(`Query failed: ${err}`);
    }
});

module.exports = router;