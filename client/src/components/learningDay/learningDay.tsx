import {FC} from 'react';
import cl from './learningDay.module.css';
import {Schedule} from "../../models/ISchedule";
import Lesson from "../Lesson/Lesson";

export interface LearningDayProps {
    nameOfDay: string;
    schedules: Schedule[];

}

const LearningDay: FC<LearningDayProps> = ({nameOfDay, schedules}) => {
    console.log(schedules)
    return (
        <div className={cl.dayPlace}>
            <p className={cl.textDay}>{nameOfDay ? nameOfDay : 'Суббота'}</p>
            <div className={cl.learningDay}>
                {
                    schedules.length !== 0 ? schedules.map((lesson) => <Lesson schedule={lesson}/>) :
                        <div> Нет занятий</div>
                }
            </div>
        </div>
    );
};

export default LearningDay;