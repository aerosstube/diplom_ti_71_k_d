import {FC} from 'react';
import cl from './learningDay.module.css';
import LessonMark, {LessonProps} from '../Lesson/LessonMark';


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