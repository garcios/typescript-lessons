"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var onSuccess_1 = require("./onSuccess");
var databaseErrorHandler_1 = require("./databaseErrorHandler");
var onError_1 = require("./onError");
var updateLesson_1 = require("../queries/updateLesson");
function apiPatchLesson(req, res) {
    var lessonId = req.params.id;
    console.log("Updating lesson with id " + lessonId);
    updateLesson_1.updateLesson(lessonId, req.body)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(databaseErrorHandler_1.databaseErrorHandler, res))
        .catch(_.partial(onError_1.onError, res, "Could not update lessons"));
}
exports.apiPatchLesson = apiPatchLesson;
