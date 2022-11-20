import {FC} from 'react';
import {ListItemButton, ListItemText} from '@mui/material';
import cl from '../learningDay/learningDay.module.css';
import {Schedule} from "../../models/ISchedule";

interface LessonProps {
    schedule: Schedule;
}

const Lesson: FC<LessonProps> = ({schedule}) => {
    const hours = (new Date(schedule.startTime).getHours().toString().length === 1) ? ('0' + new Date(schedule.startTime).getHours().toString()) : new Date(schedule.startTime).getHours().toString();
    const minutes = (new Date(schedule.startTime).getMinutes().toString().length === 1) ? '00' : new Date(schedule.startTime).getMinutes().toString();
    return (
        <ListItemButton component="a" href="#simple-list">
            <ListItemText
                primary={schedule.twoOurClassName}
                secondary={hours + ':' + minutes}//Проблема в этой блядской строчке
                className={cl.textLesson}
            />
            <ListItemText
                primary={schedule.audience}
                secondary={schedule.teacher}
                className={cl.textLessonNotMark}
            />
        </ListItemButton>
    );
};

export default Lesson;