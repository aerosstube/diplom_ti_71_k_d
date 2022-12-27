import React, {FC, useState} from 'react';
import LearningDay from '../learningDay/learningDay';
import cl from './LearningWeek.module.css';
import {getMonday} from "../../utils";
import {lessonApi} from "../../services/LessonService";
import classes from '../Pagination/Pagination.module.css'
import {DatePicker, DatePickerProps} from "antd";


const LearningWeek: FC = () => {
    const [mainDate, setMainDate] = useState(getMonday(new Date('November 17, 2022 03:24:00')));
    const {data: days} = lessonApi.useFetchLessonsQuery(mainDate.toISOString());

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        let dateOfDay = new Date(dateString);
        dateOfDay.setHours(dateOfDay.getHours() - 3)
        setMainDate(getMonday(dateOfDay))
    };


    return (
        <>
            <div className={classes.pageContain}>
                <DatePicker onChange={onChange}/>
            </div>
            <div className={cl.learningWeek}>
                {

                    days?.map((day, index) => <LearningDay key={index} nameOfDay={day.schedules[0]?.weekday || ''}
                                                           schedules={day.schedules}/>)

                }
            </div>
        </>
    );
};
export default LearningWeek;