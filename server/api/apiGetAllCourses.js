"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findAllCourses_1 = require("../queries/findAllCourses");
var _ = require("lodash");
var onError_1 = require("./onError");
var onSuccess_1 = require("./onSuccess");
function apiGetAllCourses(req, res) {
    findAllCourses_1.findAllCourse()
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res, "Find all Courses Failed"));
}
exports.apiGetAllCourses = apiGetAllCourses;
