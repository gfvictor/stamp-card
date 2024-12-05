const clientService = require('../services/clientService');

class ClientController {
    constructor(service) {
        this.service = service;
    }

    async createClient(req, res) {
        try {
            const newClient = await this.service.createClient(req.body);
            res.status(201).json(newClient);

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getAllClients (req, res) {
        try {
            const clients = await this.service.getAllClients();
            res.status(200).json(clients);

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getClientById (res, req) {
        try {
            const client = await this.service.getClientById(req.params.id);
            res.status(200).json(client)

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateClient(req, res) {
        try {
            const client = await this.service.updateClient(req.params.id, req.body);
            res.status(200).json(client);

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteClient (req, res) {
        try {
            await this.service.deleteClient(req.params.id);
            res.status(200).send("Client successfully deleted.");
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new ClientController(clientService);