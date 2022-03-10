'use strict';

const express = require('express');
const router = express.Router();
const listAllContaminationRateController = require('../controllers/ContaminationRateController/ListAllContaminationRateController');

router.get(`/findAllContaminationRate`, listAllContaminationRateController.findAllContaminationRate);


module.exports = router;