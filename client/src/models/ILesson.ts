import {ITeacher} from './ITeacher';

export interface ILesson {
    audience: number;
    dateOfClass: Date;
    groupName: string;
    homework: string;
    startTime: string;
    teacher: ITeacher;
    weekday: string;
}