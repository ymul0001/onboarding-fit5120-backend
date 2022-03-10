'use strict';

const mysqlService = require('../services/mysql');

const findUserByUserNameAndPassword = (userId, password) => {
    return mysqlService.execute(`SELECT user_id, password
                                 FROM user 
                                 WHERE user_id = '${userId}' and password = '${password}'`)
}

module.exports = {
    findUserByUserNameAndPassword
}
