const Store = require('../models/store');

class StoreRepository {
    constructor(storeModel) {
        this.storeModel = storeModel;
    }

    async create(storeData) {
        const store = new this.storeModel(storeData);
        return await store.save();
    }

    async findAll() {
        return await this.storeModel.find();
    }

    async findById(storeId) {
        return await this.storeModel.findById(storeId);
    }

    async update(storeId, updateData) {
        return await this.storeModel.findByIdAndUpdate(storeId, updateData);
    }

    async delete(storeId) {
        return await this.storeModel.findByIdAndDelete(storeId);
    }
}

module.exports = new StoreRepository(Store);