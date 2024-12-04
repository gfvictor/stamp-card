const clientRepository = require('../repositories/clientRepository');

class ClientService {
    async createClient(clientData) {
        await clientRepository.create(clientData);
    }

    async getAllClients() {
        await clientRepository.findAll();
    }

    async getClientById(clientId) {
        const client = await clientRepository.findById(clientId);
        if (!client) throw new Error("Client not found!");
        return client;
    }

    async updateClient(clientId, updateData) {
        await clientRepository.update(clientId, updateData);
    }

    async deleteClient(clientId) {
        await clientRepository.delete(clientId);
    }
}

module.exports = new ClientService();