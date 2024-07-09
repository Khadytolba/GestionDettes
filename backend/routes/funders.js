const express = require('express');
const router = express.Router();
const Funder = require('../models/Funder');

router.get('/', async (req, res) => {
    try {
        const funders = await Funder.find();
        res.json(funders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const newFunder = new Funder(req.body);
    try {
        const savedFunder = await newFunder.save();
        res.status(201).json(savedFunder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedFunder = await Funder.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedFunder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Funder.findByIdAndDelete(req.params.id);
        res.json({ message: 'Funder deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
