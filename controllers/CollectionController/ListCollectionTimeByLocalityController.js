'use strict';

const Collection = require('../../models/Collection');
const StringUtils = require('../../commons/utils/StringUtils');
const ListUtils = require('../../commons/utils/ListUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');

const findCollectionTimeByLocality = async (req, res) => {
    const locality = req.query.locality;
    validateQueryParams(res, locality);
    const collection = await Collection.findCollectionTimeByLocality(locality);
    validateCollectionData(res, collection);
}

const validateQueryParams = (res, locality) => {
    if (StringUtils.isNullOrEmpty(locality)){
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'locality cannot be empty!');
    }
}

const validateCollectionData = (res, data) => {
    if (ListUtils.isNullOrEmpty(data[0])) {
        return Response.returnResponse(res, StatusCode.status.DATA_NOT_FOUND_EXCEPTION, 'No Collection Data Found!');
    }
    return Response.returnResponse(res, StatusCode.status.SUCCESS, data[0]);
}


module.exports = {
    findCollectionTimeByLocality
}