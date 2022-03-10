'use strict';

const AverageYieldCost = require('../../models/AverageYieldCost');
const StringUtils = require('../../commons/utils/StringUtils');
const ListUtils = require('../../commons/utils/ListUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');

const findAverageYieldCostByCollectionSystem = async (req, res) => {
    const collectionSystem = req.query.collectionsystem;
    validateQueryParams(res, collectionSystem);
    if (collectionSystem != undefined) {
        const averageYieldCost = await AverageYieldCost.findAverageYieldCostByCollectionSystem(parseInt(collectionSystem));
        validateAverageYieldCostData(res, averageYieldCost);
    }
}

const validateQueryParams = (res, collectionSystem) => {
    if (StringUtils.isNullOrEmpty(collectionSystem)){
        return Response.returnResponse(res, StatusCode.status.BAD_REQUEST_EXCEPTION, 'collection system cannot be empty');
    }
}

const validateAverageYieldCostData = (res, data) => {
    if (ListUtils.isNullOrEmpty(data[0])) {
        return Response.returnResponse(res, StatusCode.status.DATA_NOT_FOUND_EXCEPTION, 'No Average Yield Cost Data Found!');
    }
    return Response.returnResponse(res, StatusCode.status.SUCCESS, data[0]);
}


module.exports = {
    findAverageYieldCostByCollectionSystem
}