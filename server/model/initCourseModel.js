"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("sequelize");
function initCourseModel(sequelize) {
    return sequelize.define('Course', {
        description: { type: ORM.STRING },
        url: { type: ORM.STRING },
        longDescription: { type: ORM.TEXT },
        iconUrl: { type: ORM.STRING },
        courseListIcon: { type: ORM.STRING },
        seqNo: { type: ORM.STRING },
        comingSoon: { type: ORM.BOOLEAN },
        isNew: { type: ORM.BOOLEAN },
        isOngoing: { type: ORM.BOOLEAN }
    });
}
exports.initCourseModel = initCourseModel;
