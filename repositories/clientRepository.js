const Client = require("../models/client");

class ClientRepository {
    constructor(clientModel) {
        this.clientModel = clientModel;
    }

    async create(clientData) {
        const client = new this.clientModel(clientData);
        return await client.save();
    }

    async findAll() {
        return await this.clientModel.find();
    }

    async findById(clientId) {
        return await this.clientModel.findById(clientId);
    }

    async update(clientId, updateData) {
        return await this.clientModel.findByIdAndUpdate(clientId, updateData);
    }

    async delete(clientId) {
        return await this.clientModel.findByIdAndDelete(clientId);
    }
}

module.exports = new ClientRepository(Client);