import {FC} from 'react';
import cl from './LearningWeek.module.css';
import {getMonday} from "../../utils";
import {lessonApi} from "../../services/LessonService";
import LearningDayMark from "../learningDay/LearnigDayMark";

const LearningWeekMark: FC = () => {
    const mainDate = getMonday(new Date('November 2022 15'));
    const {data: days} = lessonApi.useFetchMarksQuery(mainDate.toISOString());
    return (
        <div className={cl.learningWeek}>
            {

                days?.map((day) => <LearningDayMark nameOfDay={day.schedules[0]?.weekday || ''}
                                                    schedules={day.schedules}/>)

            }
        </div>
    );
};
export default LearningWeekMark;