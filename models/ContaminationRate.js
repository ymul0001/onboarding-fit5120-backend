'use strict';

const mysqlService = require('../services/mysql');

const findAllContaminationRate = () => {
    return mysqlService.execute(`SELECT * FROM contamination_rate;`)
}

module.exports = {
    findAllContaminationRate
}