'use strict';

const express = require('express');
const router = express.Router();
const listAllAverageYieldCostController = require('../controllers/AverageYieldCostController/ListAllAverageYieldCostController');
const listAverageYieldCostByCollectionSystem = require('../controllers/AverageYieldCostController/ListAverageYieldCostByCollectionSystemController');

router.get(`/findAllAverageYieldCost`, listAllAverageYieldCostController.findAllAverageYieldCost);
router.get(`/findAverageYieldCostByCollectionSystem`, listAverageYieldCostByCollectionSystem.findAverageYieldCostByCollectionSystem)


module.exports = router;