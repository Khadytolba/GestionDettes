const express = require('express');
const router = express.Router();
const Convention = require('../models/Convention');

router.get('/', async (req, res) => {
    try {
        const conventions = await Convention.find();
        res.json(conventions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const newConvention = new Convention(req.body);
    try {
        const savedConvention = await newConvention.save();
        res.status(201).json(savedConvention);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedConvention = await Convention.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedConvention);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Convention.findByIdAndDelete(req.params.id);
        res.json({ message: 'Convention deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
