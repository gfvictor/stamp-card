// const path = require('path');
// const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const connectDB = require('./database')

const clientRoutes = require('./routes/clientRoutes');
const storeRoutes = require('./routes/storeRoutes');
const transactionsRoutes = require('./routes/transactionsRoutes');
const pointsRoutes = require('./routes/pointsRoutes');

const app = express();

connectDB().then(() => console.log('MongoDB conectado com sucesso!'));

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000.')
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// api routes reserved space lol
app.use('/api/clients', clientRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/transaction', transactionsRoutes);
app.use('/api/points', pointsRoutes);

app.use((req, res, next) => {
  res.status(404).json({error: 'Not found'});
  next();
});

app.use((err, req, res) => {
  const status =  err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    error: {
      status: status,
      message: message,
    }
  });
});

module.exports = app;
