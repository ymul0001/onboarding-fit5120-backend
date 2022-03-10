'use strict';

const User = require('../../models/User');
const StringUtils = require('../../commons/utils/StringUtils');
const ListUtils = require('../../commons/utils/ListUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');
const crypto = require('crypto');

const findUserByUserIdAndPassword = async (req, res) => {
    const userId = req.query.userid;
    const rawPassword = req.query.password;
    validateQueryParams(res, userId, rawPassword);
    const hashedPassword =  crypto.createHash('md5').update(rawPassword).digest('hex');
    const user = await User.findUserByUserNameAndPassword(userId, hashedPassword);
    validateUserData(res, user);
}

const validateQueryParams = (res, userId, password) => {
    if (StringUtils.isNullOrEmpty(userId)){
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'user id cannot be empty');
    }
    if (StringUtils.isNullOrEmpty(password)){
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'password cannot be empty');
    }
}

const validateUserData = (res, user) => {
    if (ListUtils.isNullOrEmpty(user[0])) {
        return Response.returnResponse(res, StatusCode.status.DATA_NOT_FOUND_EXCEPTION, 'this credential is not registered!');
    }
    return Response.returnResponse(res, StatusCode.status.SUCCESS, 'A right credential is found');
}


module.exports = {
    findUserByUserIdAndPassword
}