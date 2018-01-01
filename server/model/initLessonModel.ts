import {Sequelize} from 'sequelize';
import * as ORM from 'sequelize';

export function initLessonModel(sequelize:Sequelize ){
    return sequelize.define('Lessons', {
        url: {type: ORM.STRING},
        description: {type: ORM.STRING},
        duration: {type: ORM.STRING},
        seqNo: {type: ORM.INTEGER},
        courseId: {type: ORM.INTEGER},
        pro: {type: ORM.BOOLEAN},
        tags: {type: ORM.STRING},
        gitHubUrl: {type: ORM.STRING}
    });
}