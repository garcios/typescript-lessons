import {Request, Response} from 'express';
import {findAllCourse} from "../queries/findAllCourses";
import * as _  from 'lodash';
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";

export function apiGetAllCourses(req:Request,res:Response){

    findAllCourse()
       // .then(() => {throw new Error('Oscar Error!')})
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, "Find all Courses Failed"));

}

