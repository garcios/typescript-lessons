import * as Sequelize from 'sequelize';
import {initCourseModel} from "./initCourseModel";
import {initLessonModel} from "./initLessonModel";

const dbUrl = 'postgres://oscar:oscar@localhost:5432/postgres';
const conn= new Sequelize(dbUrl);

export const CourseModel = initCourseModel(conn);

export const LessonModel = initLessonModel(conn);

CourseModel.hasMany(LessonModel, {foreignKey:'courseId'});

LessonModel.belongsTo(CourseModel, {foreignKey:'courseId'});