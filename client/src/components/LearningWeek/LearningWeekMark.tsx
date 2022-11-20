import {FC} from 'react';
import cl from './LearningWeek.module.css';


const LearningWeekMark: FC = () => {


    return (
        <div className={cl.learningWeek}>
            {/*{*/}
            {/*    days && days.map((day) => <LearningDayMark nameOfDay={day.weekday} schedules={days}/>)*/}

            {/*}*/}
        </div>
    );
};
export default LearningWeekMark;