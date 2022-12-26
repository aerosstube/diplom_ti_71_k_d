import React, {FC, useState} from 'react';
import cl from './LearningWeek.module.css';
import {getMonday} from "../../utils";
import {lessonApi} from "../../services/LessonService";
import LearningDayMark from "../learningDay/LearnigDayMark";
import classes from "../Pagination/Pagination.module.css";
import {DatePicker, DatePickerProps} from "antd";

const LearningWeekMark: FC = () => {
    const [mainMarkDate, setMainMarkDate] = useState(getMonday(new Date('November 17, 2022 03:24:00')));
    const {data: days} = lessonApi.useFetchMarksQuery(mainMarkDate.toISOString());

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString)

    };


    return (
        <>
            <div className={classes.pageContain}>
                <DatePicker onChange={onChange}/>
            </div>
            <div className={cl.learningWeek}>
                {

                    days?.map((day, index) => <LearningDayMark key={index}
                                                               nameOfDay={day.schedules[0]?.weekday || ''}
                                                               schedules={day.schedules}/>)

                }
            </div>
        </>
    );
};
export default LearningWeekMark;