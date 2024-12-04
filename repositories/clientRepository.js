const Client = require("../models/client");

class ClientRepository {
    async create(clientData) {
        const client = new Client(clientData);
        return await client.save();
    }

    async findAll() {
        await Client.find();
    }

    async findById(clientId) {
        await Client.findById(clientId);
    }

    async update(clientId, updateData) {
        await Client.findByIdAndUpdate(clientId, updateData);
    }

    async delete(clientId) {
        await Client.findByIdAndDelete(clientId);
    }
}

module.exports = new ClientRepository();