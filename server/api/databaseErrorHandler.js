"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//since there is no type definitions
var hri = require('human-readable-ids').hri;
function databaseErrorHandler(res, err) {
    var id = hri.random();
    console.error("Database error occurred", id, err);
    res.status(500).send({ code: 'ERR-002', message: "Creation of lesson failed, error code " + id });
}
exports.databaseErrorHandler = databaseErrorHandler;
