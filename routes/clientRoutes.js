const express = require('express');
const Client = require('../models/client');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newClient = new Client(req.body);
        const savedClient = await newClient.save();
        res.status(201).json(savedClient);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get('/', async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);

        client
        ? res.status(200).json(client)
        : res.status(404).json({message: "Client not found."});

    } catch (err) {
        res.status(500).json({error: err.message});
    }
})

router.put('/:id', async (req,res) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, {new: true});

        updatedClient
        ? res.status(200).json(updatedClient)
        : res.status(404).json({message: "Client not found."});

    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedClient = await Client.findByIdAndDelete(req.params.id);

        deletedClient
        ? res.status(200).json({message: "Client successfully deleted."})
        : res.status(404).json({message: "Client not found."});

    } catch (err) {
      res.status(500).json({error: err.message});
    }
});

module.exports = router