const mongoose = require('mongoose');

const uri = "mongodb+srv://encode-test:encode@stamp-card-cluster.2vsjw.mongodb.net/point_card?retryWrites=true&w=majority&appName=stamp-card-cluster";

const connectDB = async() => {
    try {
        await mongoose.connect(uri, {serverSelectionTimeoutMS: 5000});
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw new Error("Critical error while establishing database connection!")
    }
};

module.exports = connectDB;