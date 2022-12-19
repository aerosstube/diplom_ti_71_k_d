import React, {FC, useState} from 'react';
import LearningDay from '../learningDay/learningDay';
import cl from './LearningWeek.module.css';
import {getMonday} from "../../utils";
import {lessonApi} from "../../services/LessonService";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import classes from '../Pagination/Pagination.module.css'


const LearningWeek: FC = () => {
    const [mainDate, setMainDate] = useState(getMonday(new Date('November 17, 2022 03:24:00')));
    const {data: days} = lessonApi.useFetchLessonsQuery(mainDate.toISOString());

    function incWeek() {
        mainDate.setDate(mainDate.getDate() + 7)
        setMainDate(mainDate)
    }

    function decWeek() {
        mainDate.setDate(mainDate.getDate() - 7)
        setMainDate(mainDate)

    }

    return (
        <>
            <div className={classes.pageContain}>
                <LeftOutlined className={classes.pageIcon} onClick={decWeek}/>
                <h4 className={classes.pageText}>{mainDate.getDate()}.{mainDate.getMonth()}.{mainDate.getFullYear()}</h4>
                <RightOutlined className={classes.pageIcon} onClick={incWeek}/>
            </div>
            <div className={cl.learningWeek}>
                {

                    days?.map((day) => <LearningDay nameOfDay={day.schedules[0]?.weekday || ''}
                                                    schedules={day.schedules}/>)

                }
            </div>
        </>
    );
};
export default LearningWeek;