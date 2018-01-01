import {LessonModel} from "../model/model";

export function updateLesson(id:string, props: any){

    console.log(props);

   return LessonModel.update(
       props,
       {where: {id}}
   );
}