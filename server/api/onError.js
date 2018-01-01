"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onError(res, message, err) {
    console.error("Promise chain error ", message, err);
    res.status(500).send({ errorCode: 'ERR-002', message: message });
}
exports.onError = onError;
