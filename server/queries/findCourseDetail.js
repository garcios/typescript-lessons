"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
function findCourseDetail(courseId) {
    return model_1.CourseModel.findById(courseId, {
        include: [
            {
                model: model_1.LessonModel
            }
        ]
    });
}
exports.findCourseDetail = findCourseDetail;
