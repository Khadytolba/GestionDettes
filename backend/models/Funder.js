const mongoose = require('mongoose');

const FunderSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    label: { type: String, required: true },
    category: { type: String, required: true }
});

const Funder = mongoose.model('Funder', FunderSchema);

module.exports = Funder;

