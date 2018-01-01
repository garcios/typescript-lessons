"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var onSuccess_1 = require("./onSuccess");
var onError_1 = require("./onError");
var _ = require("lodash");
var findCourseDetail_1 = require("../queries/findCourseDetail");
function apiGetCourseDetail(req, res) {
    var courseId = parseInt(req.params.id);
    console.log("courseId:", courseId);
    findCourseDetail_1.findCourseDetail(courseId)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res, "Find all Course Detailed Failed"));
}
exports.apiGetCourseDetail = apiGetCourseDetail;
