const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

router.get('/', async (req, res) => {
    try {
        const quotes = await Quote.find();
        res.json(quotes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/random', async (req, res) => {
    try {
        const count = await Quote.countDocuments();
        const random = Math.floor(Math.random() * count);
        const quote = await Quote.findOne().skip(random);
        res.json(quote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/search', async (req, res) => {
    try {
        const { author } = req.query;
        const quotes = await Quote.find({ author: new RegExp(author, 'i') });
        res.json(quotes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
