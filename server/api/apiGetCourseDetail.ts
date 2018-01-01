import {Request, Response} from "express";
import {onSuccess} from "./onSuccess";
import {onError} from "./onError";
import * as _ from "lodash";
import {findCourseDetail} from "../queries/findCourseDetail";

export function apiGetCourseDetail(req:Request,res:Response){
   const courseId = parseInt(req.params.id);

   console.log("courseId:", courseId);

   findCourseDetail(courseId)
       .then(_.partial(onSuccess, res))
       .catch(_.partial(onError, res, "Find all Course Detailed Failed"));

}