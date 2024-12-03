const express = require('express');
const Point = require('../models/points');

const router = express.Router();

router.get('/client/:client_id', async (req, res) => {
    try {
        const totalPoints = await Point.aggregate([
            { $match: {client_id: req.params.client_id} },
            { $group: {_id: null, total: {$sum: "$points"}} }
        ]);

        const points = totalPoints[0]?.total || 0;
        res.status(200).json({
            client_id: req.params.client_id,
            total_points: points
        });
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get('/client/:client_id/store/:store_id', async (req, res) => {
    try {
        const totalPoints = await Point.aggregate([
            { $match: {client_id: req.params.client_id, store_id: req.params.store_id} },
            { $group: {_id: null, total: {$sum: "$points"}} }
        ]);

        const points = totalPoints[0]?.total || 0;
        res.status(200).json({
            client_id: req.params.client_id,
            store_id: req.params.store_id,
            total_points: points
        });
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get('/history/client/:client_id', async (req, res) => {
    try {
        const history = await Point.find({client_id: req.params.client_id})
            .sort({created_at: -1})
            .exec();

        res.status(200).json({client_id: req.params.client_id, history});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = router;