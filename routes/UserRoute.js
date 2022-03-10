'use strict';

const express = require('express');
const router = express.Router();
const listUserByUserIdAndPasswordController = require('../controllers/UserController/ListUserByUserIdAndPasswordController');

router.get(`/findUserByUseridAndPassword`, listUserByUserIdAndPasswordController.findUserByUserIdAndPassword);


module.exports = router;