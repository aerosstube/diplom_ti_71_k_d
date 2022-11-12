import {FC} from 'react';
import LearningDay, {LearningDayProps} from '../learningDay/learningDay';
import cl from './LearningWeek.module.css';

export interface LearningWeekProps {
    days: LearningDayProps[] | undefined;
}

const LearningWeek: FC<LearningWeekProps> = ({days}) => {
    return (
        <div className={cl.learningWeek}>
            {
                days && days.map((day) => <LearningDay nameOfDay={day.nameOfDay} lessons={day.lessons}/>)

            }
        </div>
    );
};
export default LearningWeek;