'use strict';

const KerbsideRecycleable = require('../../models/KerbsideRecycleable');
const ListUtils = require('../../commons/utils/ListUtils');
const Response = require('../../commons/responses/Response');
const StatusCode = require('../../commons/constant/StatusCode');

const findAllKerbsideRecycleables = async (req, res) => {
    const kerbsideRecycleable = await KerbsideRecycleable.findAllKerbsideRecycleable();
    validateKerbsideRecycleableData(res, kerbsideRecycleable);
}

const validateKerbsideRecycleableData = (res, data) => {
    if (ListUtils.isNullOrEmpty(data[0])) {
        return Response.returnResponse(res, StatusCode.status.DATA_NOT_FOUND_EXCEPTION, 'No Kerbside Recycleable Data Found!');
    }
    return Response.returnResponse(res, StatusCode.status.SUCCESS, data[0]);
}


module.exports = {
    findAllKerbsideRecycleables
}