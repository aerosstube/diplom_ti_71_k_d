import {FC} from 'react';
import cl from './learningDay.module.css'
import Lesson, {LessonProps} from "../Lesson/Lesson";


interface LearningDayProps {
    lessons:LessonProps[] | undefined;
}

const LearningDay: FC<LearningDayProps> = ({lessons}) => {
    return (
        <div className={cl.learningDay}>
            {
                lessons && lessons.map((lesson) => <Lesson title={lesson.title} body={lesson.body} mark={lesson.mark}/>)
            }
        </div>

    );
};

export default LearningDay;