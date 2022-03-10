'use strict';

const ContaminationRate = require('../../models/ContaminationRate');
const ListUtils = require('../../commons/utils/ListUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');

const findAllContaminationRate = async (req, res) => {
    const contaminationRate = await ContaminationRate.findAllContaminationRate();
    validateContaminationRateData(res, contaminationRate);
}

const validateContaminationRateData = (res, data) => {
    if (ListUtils.isNullOrEmpty(data[0])) {
        return Response.returnResponse(res, StatusCode.status.DATA_NOT_FOUND_EXCEPTION, 'No Contamination Rate Data Found!');
    }
    return Response.returnResponse(res, StatusCode.status.SUCCESS, data[0]);
}


module.exports = {
    findAllContaminationRate
}