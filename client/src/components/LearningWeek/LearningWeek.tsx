import {FC} from 'react';
import LearningDay from '../learningDay/learningDay';
import cl from './LearningWeek.module.css';
import {getMonday} from "../../utils";
import {lessonApi} from "../../services/LessonService";


const LearningWeek: FC = () => {
    const mainDate = getMonday(new Date());
    const {data: days} = lessonApi.useFetchLessonsQuery(mainDate);
    return (
        <div className={cl.learningWeek}>
            {

                days?.map((day) => <LearningDay nameOfDay={day.schedules[0]?.weekday || ''}
                                                schedules={day.schedules}/>)

            }
        </div>
    );
};
export default LearningWeek;