"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("sequelize");
function initLessonModel(sequelize) {
    return sequelize.define('Lessons', {
        url: { type: ORM.STRING },
        description: { type: ORM.STRING },
        duration: { type: ORM.STRING },
        seqNo: { type: ORM.INTEGER },
        courseId: { type: ORM.INTEGER },
        pro: { type: ORM.BOOLEAN },
        tags: { type: ORM.STRING },
        gitHubUrl: { type: ORM.STRING }
    });
}
exports.initLessonModel = initLessonModel;
