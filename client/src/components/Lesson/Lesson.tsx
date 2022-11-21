import {FC} from 'react';
import {ListItemButton, ListItemText} from '@mui/material';
import cl from '../learningDay/learningDay.module.css';
import {Schedule} from "../../models/ISchedule";

interface LessonProps {
    schedule: Schedule;
}

const Lesson: FC<LessonProps> = ({schedule}) => {
    
    const teacherName = schedule.teacher.split(/\s+/).map((w, i) => i ? w.substring(0, 1).toUpperCase() + '.' : w).join(' ');
    const lessonsName = schedule.twoOurClassName.split('').length > 15 ? schedule.twoOurClassName.substring(0, 15) + '.' : schedule.twoOurClassName;
    const hours = (new Date(schedule.startTime).getHours().toString().length === 1) ? ('0' + new Date(schedule.startTime).getHours().toString()) : new Date(schedule.startTime).getHours().toString();
    const minutes = (new Date(schedule.startTime).getMinutes().toString().length === 1) ? '00' : new Date(schedule.startTime).getMinutes().toString();
    return (
        <ListItemButton component="a" href="#simple-list">
            <ListItemText
                primary={lessonsName}
                secondary={hours + ':' + minutes}
                className={cl.textLesson}
            />
            <ListItemText
                primary={'к. ' + schedule.audience}
                secondary={teacherName}
                className={cl.textLessonNotMark}
            />
        </ListItemButton>
    );
};

export default Lesson;