import {CourseModel} from "../model/model";

export function findAllCourse(){
    return CourseModel.findAll({order: ['seqNo']});
}