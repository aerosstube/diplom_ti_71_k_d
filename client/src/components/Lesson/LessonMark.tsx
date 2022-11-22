import {FC} from 'react';
import {ListItemButton, ListItemText} from '@mui/material';
import cl from '../learningDay/learningDay.module.css';
import {LessonProps} from "./Lesson";


const LessonMark: FC<LessonProps> = ({schedule}) => {
    const mark = schedule.mark ? schedule.mark.toString() : 'y';
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
                primary={mark}
                className={cl.mark}
            />
        </ListItemButton>
    );
};

export default LessonMark;