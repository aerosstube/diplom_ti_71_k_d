import {FC} from 'react';
import cl from './LearningDay.module.css';
import {Schedule} from "../../models/ISchedule";
import Lesson from "../Lesson/Lesson";

export interface LearningDayProps {
    nameOfDay: string;
    schedules: Schedule[];

}

const LearningDay: FC<LearningDayProps> = ({nameOfDay, schedules}) => {
    return (
        <div className={cl.dayPlace}>
            <p className={cl.dayName}>{nameOfDay ? nameOfDay : 'Суббота'}</p>
            <div className={cl.dayContain}>
                {
                    schedules.length !== 0 ? schedules.map((lesson) => <Lesson key={lesson.id} schedule={lesson}/>) :
                        <h1 className={cl.dayTextNonLessons}> Нет занятий</h1>
                }
            </div>
        </div>

    );
};

export default LearningDay;