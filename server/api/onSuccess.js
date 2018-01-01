"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onSuccess(res, data) {
    res.status(200).send({ payload: data });
}
exports.onSuccess = onSuccess;
