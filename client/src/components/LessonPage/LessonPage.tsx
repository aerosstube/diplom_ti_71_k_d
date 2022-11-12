import React from 'react';
import cl from './LessonPage.module.css';
import {ListItemButton, ListItemText} from '@mui/material';

const LessonPage = () => {
    return (
        <div className={cl.lessonPage}>
            <p className={cl.lessonName}>МДК 04 01 рвыдsldhjfsdlkjhfskdhjfл</p>
            <div className={cl.lessonContainer}>
                <div className={cl.hometasks}>
                    <p className={cl.lessonBlocksText}>Домашнее задание</p>
                    <ol>
                        <li>Посмотреть видео</li>
                        <li>Написать конспект</li>
                        <li>Устроить проект Разгром</li>
                    </ol>

                </div>
                <div className={cl.hometasks}>
                    <p className={cl.lessonBlocksText}>План урока</p>
                    <ol>
                        <li>Проверка домашнего задания</li>
                        <li>Изучение новой темы</li>
                        <li>Составление конспекта</li>
                    </ol>

                </div>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemText
                        primary="Оценка за урок"
                        secondary="Срез знаний"

                    />
                    <ListItemText
                        primary="5"
                        className={cl.mark}
                    />
                </ListItemButton>
            </div>
        </div>
    );
};

export default LessonPage;