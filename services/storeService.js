const storeRepository = require('../repositories/storeRepository');

class StoreService {
    constructor(repository) {
        this.repository = repository;
    }

    async createStore(storeData) {
        return this.repository.create(storeData);
    }

    async getAllStores() {
        return await this.repository.findAll();
    }

    async getStoreById(storeId) {
        const store = await this.repository.findById(storeId);
        if (!store) throw new Error("Store not found.");
        return store;
    }

    async updateStore(storeId, updateData) {
        return await this.repository.update(storeId, updateData);
    }

    async deleteStore(storeId) {
        return await this.repository.delete(storeId)
    }
}

module.exports = new StoreService(storeRepository);