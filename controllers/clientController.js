const clientService = require('../services/clientService');

class ClientController {
    async createClient(req, res) {
        try {
            const newClient = await clientService.createClient(req.body);
            res.status(201).json(newClient);

        } catch (err) {
            console.error("Error on adding client:", err.message);
            res.status(500).json({ error: err.message });
        }
    }

    async getAllClients (req, res) {
        try {
            const clients = await clientService.getAllClients();
            res.status(200).json(clients);

        } catch (err) {
            console.error("Error while searching for clients:", err.message);
            res.status(500).json({ error: err.message });
        }
    }

    async getClientById (res, req) {
        try {
            const client = await clientService.getClientById(req.params.id);
            res.status(200).json(client)

        } catch (err) {
            console.error("Error while searching for client:", err.message);
            res.status(500).json({ error: err.message });
        }
    }

    async updateClient(req, res) {
        try {
            const client = await clientService.updateClient(req.params.id, req.body);
            res.status(200).json(client);

        } catch (err) {
            console.error("Error on client update:", err.message);
            res.status(500).json({ error: err.message });
        }
    }

    async deleteClient (req, res) {
        try {
            await clientService.deleteClient(req.params.id);
            res.status(200).send();
        } catch (err) {
            console.error("Error on client deletion:", err.message);
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new ClientController();