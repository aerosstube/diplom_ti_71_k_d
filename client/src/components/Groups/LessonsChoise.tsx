import React from 'react';
import cl from "./Groups.module.css";
import {Button} from "antd";
import {useLocation, useNavigate} from "react-router-dom";

const LessonsChoise = () => {
    const lessons = [
        {
            name: 'ТИ-71',
            lessons: [
                'MDK(TI71)',
                'MDK(TI71)2',
                "MDK(TI71)3"
            ]
        },
        {
            name: 'ТР-71',
            lessons: [
                'MDK(ТР71)',
                'MDK(ТР71)2',
                "MDK(ТР71)3"
            ]
        },

    ];
    const navigate = useNavigate();
    const location = useLocation();
    const goToMarks = (lessonName: string) => navigate('/teacherPlace', {
        state: {
            name: location.state.name,
            nameOfLesson: lessonName
        }
    });
    return (
        <div className={cl.groupContain}>
            {lessons.map((lesson) => lesson.name === location.state.name ? lesson.lessons.map((lessonName) => <Button
                className={cl.groupBlock} onClick={() => goToMarks(lessonName)}>{lessonName}</Button>) : '')

            }


        </div>
    );
};

export default LessonsChoise;