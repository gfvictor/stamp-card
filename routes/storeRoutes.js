const express = require('express');
const storeController = require('../controllers/storeController');

const router = express.Router();

router.post('/', async (req, res) => storeController.createStore(req, res));

router.get('/', async (req, res) => storeController.getAllStores(req, res));

router.get('/:id', async (req, res) => storeController.getStoreById(req, res));

router.put('/:id', async (req, res) => storeController.updateStore(req, res));

router.delete('/:id', async (req, res) => storeController.deleteStore(req, res));

module.exports = router;