"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
function findAllCourse() {
    return model_1.CourseModel.findAll({ order: ['seqNo'] });
}
exports.findAllCourse = findAllCourse;
