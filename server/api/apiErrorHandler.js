"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apiErrorHandler(err, req, res, next) {
    console.error("API error handler triggered", err);
    res.status(500).json({ errorCode: 'ERR-001', message: 'Intenal Server Error' });
}
exports.apiErrorHandler = apiErrorHandler;
