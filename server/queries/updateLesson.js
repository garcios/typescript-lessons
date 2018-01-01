"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
function updateLesson(id, props) {
    console.log(props);
    return model_1.LessonModel.update(props, { where: { id: id } });
}
exports.updateLesson = updateLesson;
