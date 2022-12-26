import React, {FC, useState} from 'react';
import {Input} from "antd";
import cl from './TCell.module.css'
import {checkMark} from "../../utils/checkMark";
import {findDate, findDateParams} from "../../utils/findDate";
import {teacherAPI} from "../../services/TeacherService";

interface TableCellProps {
    text: string,
    classID: number,
    studentID: number | undefined,
    dates: findDateParams[]

}

const TableCell: FC<TableCellProps> = ({text, classID, studentID, dates}) => {
    const [updateMark, {}] = teacherAPI.useUpdateMarksMutation()

    const mark = text.split(',')[0].split('')[0];
    const dayIndex = Number(text.split(',')[0].split('')[1]);
    const [value, setValue] = useState(mark);
    const [isEdit, setIsEdit] = useState(false);
    let dateOfLesson = findDate(dates, dayIndex);

    const handleSend = async () => {
        const mark = {
            updatedMark: value ? Number(value) : 0,
            studentId: Number(studentID),
            classId: Number(classID),
            date: dateOfLesson
        };
        await updateMark(mark);
        console.log(mark)
    };

    const handleBlur = async () => {
        setIsEdit(false);
        await handleSend()
    }

    return <p className={checkMark(value.toString())}>
        {isEdit ? <Input
            className={cl.tCellInp}
            value={value}
            onChange={event => setValue(event.target.value)}
            onBlur={handleBlur}
        /> : <span onClick={() => setIsEdit(true)}>
			{value ? value : '-'}
		</span>}
    </p>;

};

export default TableCell;