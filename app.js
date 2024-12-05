const express = require('express');
const logger = require('morgan');
const connectDB = require('./database')

const clientRoutes = require('./routes/clientRoutes');
const storeRoutes = require('./routes/storeRoutes');
const transactionsRoutes = require('./routes/transactionsRoutes');
const pointsRoutes = require('./routes/pointsRoutes');

const app = express();


(async () => {
    try {
        await connectDB();
        console.log("Database connection successfully established.")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
})();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/clients', clientRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/transactions', transactionsRoutes);
app.use('/api/points', pointsRoutes);

app.use((req, res) => {
  res.status(404).json({error: 'Not found'});
});

app.use((err, req, res, next) => {

  res.status(err.status || 500).json({
    error: {
      message: err.message || "Internal Server Error",
    }
  });
});

app.listen(8080, () => {
  console.log('Server running on port 8080.')
})

module.exports = app;
