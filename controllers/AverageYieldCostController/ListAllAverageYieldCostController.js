'use strict';

const AverageYieldCost = require('../../models/AverageYieldCost');
const ListUtils = require('../../commons/utils/ListUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');

const findAllAverageYieldCost = async (req, res) => {
    const averageYieldCost = await AverageYieldCost.findAllAverageYieldCost();
    validateAverageYieldCostData(res, averageYieldCost);
}

const validateAverageYieldCostData = (res, data) => {
    if (ListUtils.isNullOrEmpty(data[0])) {
        return Response.returnResponse(res, StatusCode.status.DATA_NOT_FOUND_EXCEPTION, 'No Average Yield Cost Data Found!');
    }
    return Response.returnResponse(res, StatusCode.status.SUCCESS, data[0]);
}


module.exports = {
    findAllAverageYieldCost
}