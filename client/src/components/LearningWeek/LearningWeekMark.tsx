import {FC} from 'react';
import {LearningDayProps} from '../learningDay/learningDay';
import cl from './LearningWeek.module.css';
import LearningDayMark from "../learningDay/LearningDayMark";

export interface LearningWeekProps {
    days: LearningDayProps[] | undefined;
}

const LearningWeek: FC<LearningWeekProps> = ({days}) => {
    return (
        <div className={cl.learningWeek}>
            {
                days && days.map((day) => <LearningDayMark nameOfDay={day.nameOfDay} lessons={day.lessons}/>)

            }
        </div>
    );
};
export default LearningWeek;