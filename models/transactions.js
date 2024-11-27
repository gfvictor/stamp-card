const mongoose = require('mongoose');

const transactionsSchema = new mongoose.Schema({
    client_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    store_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    },
    rule_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    },
    point_changes: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['accumulate', 'redeem'],
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

const Transactions = mongoose.model('Transactions', transactionsSchema);

module.exports = Transactions;