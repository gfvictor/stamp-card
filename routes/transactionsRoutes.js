const express = require('express');
const Transaction = require('../models/transactions');
const Client = require('../models/client');
const Store = require ('../models/store');
const Point = require('../models/points');

const router = express.Router();

router.post('/', async (req, res) => {
    const {client_id, store_id, rule_id, point_changes, type} = req.body;

    try {
        const client = await Client.findById(client_id);
        if (!client) {
            return res.status(404).json({message: "Client not found."});
        }

        const store = await Store.findById(store_id);
        if (!store) {
            return res.status(404).json({message: "Store not found."});
        }

        if (store._id.toString() !== rule_id) {
            return res.status(400).json({message: "Rule doesn't belong to store!"});
        }

        const newTransaction = new Transaction(req.body);
        const savedTransaction = await newTransaction.save();

        return type === "accumulate"
            ? (() => {
                const newPoints = new Point({
                    client_id,
                    store_id,
                    transaction_id: savedTransaction._id,
                    points: point_changes,
                    created_at: new Date(),
                });
                const savedPoints = newPoints.save();
                res.status(201).json({
                    transaction: savedTransaction,
                    points: savedPoints,
                });
            })()
            : res.status(201).json(savedTransaction);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get('/', async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        return !transaction
            ? res.status(404).json({message: "Transaction not found."})
            : res.status(200).json(transaction);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = router;