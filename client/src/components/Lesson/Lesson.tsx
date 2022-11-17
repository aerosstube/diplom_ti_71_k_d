import {FC} from 'react';
import {ListItemButton, ListItemText} from '@mui/material';
import cl from '../learningDay/learningDay.module.css';

export interface LessonProps {
    title: string;
    body: string;
    mark: number;
}

const Lesson: FC<LessonProps> = ({title, body}) => {
    return (
        <ListItemButton component="a" href="#simple-list">
            <ListItemText
                primary={title}
                secondary={body}
                className={cl.textLesson}
            />
            <ListItemText
                primary={'к. 219'}
                secondary={'Демин Е.С.'}
                className={cl.textLessonNotMark}
            />
        </ListItemButton>
    );
};

export default Lesson;