import {Sequelize} from 'sequelize';
import * as ORM from 'sequelize';

export function initCourseModel(sequelize:Sequelize ){
    return sequelize.define('Course', {
        description: {type: ORM.STRING},
        url: {type: ORM.STRING},
        longDescription: {type: ORM.TEXT},
        iconUrl: {type: ORM.STRING},
        courseListIcon: {type: ORM.STRING},
        seqNo: {type: ORM.STRING},
        comingSoon: {type: ORM.BOOLEAN},
        isNew: {type: ORM.BOOLEAN},
        isOngoing: {type: ORM.BOOLEAN}
    });
}