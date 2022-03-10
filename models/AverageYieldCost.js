'use strict';

const mysqlService = require('../services/mysql');


const findAllAverageYieldCost = () => {
    return mysqlService.execute(`SELECT * FROM average_yield_cost;`)
}

const findAverageYieldCostByCollectionSystem = (collectionSystem) => {
    return mysqlService.execute(`SELECT * FROM average_yield_cost WHERE collection_system_litre = ${collectionSystem};`)
}

module.exports = {
    findAllAverageYieldCost,
    findAverageYieldCostByCollectionSystem
}