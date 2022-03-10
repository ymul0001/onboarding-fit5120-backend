'use strict';

const mysqlService = require('../services/mysql');


const findAllCollectionTime = () => {
    return mysqlService.execute(`SELECT * FROM collection;`)
}

const findCollectionTimeByLocality = (locality) => {
    return mysqlService.execute(`SELECT * FROM collection WHERE locality = '${locality}';`);
}

module.exports = {
    findAllCollectionTime,
    findCollectionTimeByLocality
}