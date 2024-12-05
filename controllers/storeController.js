const storeService = require('../services/storeService');

class StoreController {
    constructor(service) {
        this.service = service;
    }

    async createStore(req, res) {
        try {
            const newStore = await this.service.createStore(req.body);
            res.status(201).json(newStore);

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getAllStores(req, res) {
        try {
            const stores = await this.service.getAllStores();
            res.status(200).json(stores);

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getStoreById(req, res) {
        try {
            const store = await this.service.getStoreById(req.params.id);
            res.status(200).json(store);

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateStore(req, res) {
        try {
            const store = await this.service.updateStore(req.params.id, req.body);
            res.status(200).json(store);

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteStore(req, res) {
        try {
            await this.service.deleteStore(req.params.id);
            res.status(200).send("Store successfully deleted.");
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new StoreController(storeService);