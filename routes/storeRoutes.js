const express = require('express');
const Store = require('../models/store');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newStore = new Store(req.body);
        const savedStore = await newStore.save();
        res.status(201).json(savedStore);

    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.get('/', async (req, res) => {
    try {
        const stores = await Store.find();
        res.status(200).json(stores);

    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const store = await Store.findById(req.params.id);

        store
        ? res.status(200).json(store)
        : res.status(404).json({message: 'Store not found.'});

    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedStore = await Store.findByIdAndUpdate(req.params.id, req.body, {new: true});

        updatedStore
        ? res.status(200).json(updatedStore)
        : res.status(404).json({message: "Store not found."});

    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedStore = await Store.findByIdAndDelete(req.params.id);

        deletedStore
        ? res.status(200).json({message: "Store successfully deleted."})
        : res.status(404).json({message: "Store not found."});

    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

module.exports = router;