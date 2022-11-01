import React from 'react';
import cl from './LessonPage.module.css'
import {ListItemButton, ListItemText} from "@mui/material";
const LessonPage = () => {
    return (
        <div className={cl.lessonPage}>

            <div className={cl.hometasks}>

            </div>
            <div className={cl.hometasks}>

            </div>
            <ListItemButton component="a" href="#simple-list" >
                <ListItemText
                    primary='Оценка'
                    secondary='За что'

                />
                <ListItemText
                    primary='5'
                    className={cl.mark}
                />
            </ListItemButton>
            </div>
    );
};

export default LessonPage;