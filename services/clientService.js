const clientRepository = require('../repositories/clientRepository');

class ClientService {
    constructor(repository) {
        this.repository = repository;
    }
    async createClient(clientData) {
        return this.repository.create(clientData);
    }

    async getAllClients() {
        return await this.repository.findAll();
    }

    async getClientById(clientId) {
        const client = await this.repository.findById(clientId);
        if (!client) throw new Error("Client not found!");
        return client;
    }

    async updateClient(clientId, updateData) {
        return await this.repository.update(clientId, updateData);
    }

    async deleteClient(clientId) {
        return await this.repository.delete(clientId);
    }
}

module.exports = new ClientService(clientRepository);