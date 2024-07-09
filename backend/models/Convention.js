const mongoose = require('mongoose');

const ConventionSchema = new mongoose.Schema({
    reference: { type: String, required: true, unique: true },
    description: { type: String },
    isRetrocede: { type: Boolean, default: false },
    amount: { type: Number, required: true },
    amountInRefCurrency: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    startDateRefund: { type: Date },
    endDateRefund: { type: Date },
    interestRate: { type: Number },
    period: { type: Number },
    gracePeriod: { type: Number },
    codeFunder: { type: String, required: true },
    currency: {
        code: { type: String, required: true },
        label: { type: String, required: true }
    }
});

const Convention = mongoose.model('Convention', ConventionSchema);

module.exports = Convention;

