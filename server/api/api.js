"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiGetAllCourses_1 = require("./apiGetAllCourses");
var apiGetCourseDetail_1 = require("./apiGetCourseDetail");
var apiCreateLesson_1 = require("./apiCreateLesson");
function initRestApi(app) {
    app.route('/api/courses').get(apiGetAllCourses_1.apiGetAllCourses);
    app.route('/api/courses/:id').get(apiGetCourseDetail_1.apiGetCourseDetail);
    app.route('/api/lessons').post(apiCreateLesson_1.apiCreateLesson);
}
exports.initRestApi = initRestApi;
