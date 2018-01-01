import {Request, Response} from "express";
import * as _ from "lodash";
import {onSuccess} from "./onSuccess";
import {databaseErrorHandler} from "./databaseErrorHandler";
import {onError} from "./onError";
import {updateLesson} from "../queries/updateLesson";

export function apiPatchLesson(req:Request,res:Response){

    const lessonId = req.params.id;

    console.log(`Updating lesson with id ${lessonId}`);

    updateLesson(lessonId, req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(databaseErrorHandler, res))
        .catch(_.partial(onError, res, `Could not update lessons`));
}