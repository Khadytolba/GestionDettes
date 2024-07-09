const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    reference: { type: String, required: true, unique: true },
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
    refConvention: { type: mongoose.Schema.Types.ObjectId, ref: 'Convention', required: true }
});

const Invoice = mongoose.model('Invoice', InvoiceSchema);

module.exports = Invoice;

