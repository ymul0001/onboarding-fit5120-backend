'use strict';

const mysqlService = require('../services/mysql');

/**
 * SELECT * FROM kerbside_recycleable;

   SELECT metro_tonnes_collected, metro_tonnes_sorted  FROM kerbside_recycleable;

   SELECT non_metro_tonnes_collected, non_metro_tonnes_sorted FROM kerbside_recycleable;

   SELECT state_tonnes_collected, state_tonnes_sorted FROM kerbside_recycleable
 */

const findAllKerbsideRecycleable = () => {
    return mysqlService.execute(`SELECT * FROM kerbside_recycleable;`)
}

const findMetroTonnesCollectedAndSorted = () => {
    return mysqlService.execute(`SELECT metro_tonnes_collected, metro_tonnes_sorted FROM kerbside_recycleable;`)
}

const findNonMetroTonnesCollectedAndSorted = () => {
    return mysqlService.execute(`SELECT non_metro_tonnes_collected, non_metro_tonnes_sorted FROM kerbside_recycleable;`)
}

const findStateTonnesCollectedAndSorted = () => {
    return mysqlService.execute(`SELECT state_tonnes_collected, state_tonnes_sorted FROM kerbside_recycleable;`)
}

module.exports = {
    findAllKerbsideRecycleable,
    findMetroTonnesCollectedAndSorted,
    findNonMetroTonnesCollectedAndSorted,
    findStateTonnesCollectedAndSorted
}