const express = require('express');
const clientController = require('../controllers/clientController');

const router = express.Router();

router.post('/', (req, res) => clientController.createClient(req, res));
router.get('/', (req, res) => clientController.getAllClients(req, res));
router.get('/:id', (req, res) => clientController.getClientById(req, res));
router.put('/:id', (req, res) => clientController.updateClient(req, res));
router.delete('/:id', (req, res) => clientController.deleteClient(req, res));

module.exports = router;