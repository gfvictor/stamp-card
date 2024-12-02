const mongoose = require('mongoose');

const uri = "mongodb+srv://encode-test:encode@stamp-card-cluster.2vsjw.mongodb.net/?retryWrites=true&w=majority&appName=stamp-card-cluster";

const connectDB = async() => {
    try {
        await mongoose.connect(uri, {
            serverApi: {
                deprecationErrors: true,
                strict: true,
                version: '1',
            }
        });
        await mongoose.connection.db.admin().command({ping: 1});
    } catch (err) {
        console.error('Erro ao conectar com MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;