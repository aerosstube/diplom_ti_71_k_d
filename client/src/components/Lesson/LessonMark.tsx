import {FC} from 'react';
import cl from './Lesson.module.css';
import {LessonProps} from "./Lesson";


const LessonMark: FC<LessonProps> = ({schedule}) => {
    const mark = schedule.mark ? schedule.mark.toString() : '-';
    const teacherName = schedule.teacher.split(/\s+/).map((w, i) => i ? w.substring(0, 1).toUpperCase() + '.' : w).join(' ');
    const lessonsName = schedule.twoOurClassName.split('').length > 15 ? schedule.twoOurClassName.substring(0, 15) + '.' : schedule.twoOurClassName;
    return (
        <div className={cl.lessonContain}>
            <div className={cl.lessonTextLeft}>
                <p className={cl.lessonName}>{lessonsName}</p>
                <p className={cl.teacherName}>{teacherName}</p>
            </div>
            <div className={cl.lessonMark}>
                <p className={cl.markText}>{mark}</p>
            </div>

        </div>
    );
};

export default LessonMark;