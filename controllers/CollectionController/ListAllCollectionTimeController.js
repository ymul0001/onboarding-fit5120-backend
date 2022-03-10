'use strict';

const Collection = require('../../models/Collection');
const ListUtils = require('../../commons/utils/ListUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');

const findAllCollectionTime = async (req, res) => {
    const collection = await Collection.findAllCollectionTime();
    validateCollectionData(res, collection);
}

const validateCollectionData = (res, data) => {
    if (ListUtils.isNullOrEmpty(data[0])) {
        return Response.returnResponse(res, StatusCode.status.DATA_NOT_FOUND_EXCEPTION, 'No Collection Data Found!');
    }
    return Response.returnResponse(res, StatusCode.status.SUCCESS, data[0]);
}


module.exports = {
    findAllCollectionTime
}