import {FC} from 'react';
import {ListItemButton, ListItemText} from '@mui/material';
import cl from '../learningDay/learningDay.module.css';


const LessonMark: FC = ({}) => {
    return (
        <ListItemButton component="a" href="#simple-list">
            <ListItemText
                primary={'title'}
                secondary={'body'}
                className={cl.textLesson}
            />
            <ListItemText
                primary={'mark'}
                className={cl.mark}
            />
        </ListItemButton>
    );
};

export default LessonMark;