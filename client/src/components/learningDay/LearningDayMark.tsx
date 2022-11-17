import {FC} from 'react';
import cl from './learningDay.module.css';
import {LessonProps} from '../Lesson/LessonMark';
import LessonMark from "../Lesson/Lesson";


export interface LearningDayProps {
    nameOfDay: string;
    lessons: LessonProps[] | undefined;
}

const LearningDay: FC<LearningDayProps> = ({lessons, nameOfDay}) => {
    return (
        <div className={cl.dayPlace}>
            <p className={cl.textDay}>{nameOfDay}</p>
            <div className={cl.learningDay}>
                {
                    lessons && lessons.map((lesson) => <LessonMark title={lesson.title} body={lesson.body}
                                                               mark={lesson.mark}/>)


                }
            </div>
        </div>
    );
};

export default LearningDay;