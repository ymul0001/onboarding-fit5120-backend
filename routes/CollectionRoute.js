'use strict';

const express = require('express');
const router = express.Router();
const listAllCollectionTimeController = require('../controllers/CollectionController/ListAllCollectionTimeController');
const listCollectionTimeByLocalityController = require('../controllers/CollectionController/ListCollectionTimeByLocalityController');

router.get(`/findAllCollectionTime`, listAllCollectionTimeController.findAllCollectionTime);
router.get(`/findCollectionTimeByLocality`, listCollectionTimeByLocalityController.findCollectionTimeByLocality);


module.exports = router;