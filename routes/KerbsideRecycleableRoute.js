'use strict';

const express = require('express');
const router = express.Router();
const ListAllKerbsideRecycleableController = require('../controllers/KerbsideRecycleableController/ListAllKerbsideRecycleableController');
const ListMetroTonnesCollectedAndSortedController = require('../controllers/KerbsideRecycleableController/ListMetroTonnesCollectedAndSortedController');
const ListNonMetroTonnesCollectedAndSortedController = require('../controllers/KerbsideRecycleableController/ListNonMetroTonnesCollectedAndSortedController');
const ListStateTonnesCollectedAndSortedController = require('../controllers/KerbsideRecycleableController/ListStateTonnesCollectedAndSortedController');

router.get(`/findAllKerbsideRecycleable`, ListAllKerbsideRecycleableController.findAllKerbsideRecycleables);
router.get(`/findMetroTonnesCollectedAndSorted`, ListMetroTonnesCollectedAndSortedController.findMetroTonnesCollectedAndSorted);
router.get(`/findNonMetroTonnesCollectedAndSorted`, ListNonMetroTonnesCollectedAndSortedController.findNonMetroTonnesCollectedAndSorted);
router.get(`/findStateTonnesCollectedAndSorted`, ListStateTonnesCollectedAndSortedController.findStateTonnesCollectedAndSorted);


module.exports = router;