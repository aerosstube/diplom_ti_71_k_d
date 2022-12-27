import React, {FC, useEffect, useState} from 'react';
import {Input} from "antd";
import cl from './TCell.module.css'
import {checkMark} from "../../utils/checkMark";
import {findDate, findDateParams} from "../../utils/findDate";
import {teacherAPI} from "../../services/TeacherService";
import {IMarksToBD} from "../../models/IMarksToBD";
import {findMarkId} from "../../utils/findMarkId";
import {IBDMarks} from "../../models/IBDMarks";

interface TableCellProps {
    text: string,
    classID: number,
    studentID: number | undefined,
    dates: findDateParams[],
    marks: IBDMarks | undefined,
    refetch: any

}

const TableCell: FC<TableCellProps> = ({text, classID, studentID, dates, marks, refetch}) => {
    const [updateMark, {data: markIdFromBD}] = teacherAPI.useUpdateMarksMutation()

    const markOfLesson = text.split(',')[0].split('')[0];
    const dayIndex = Number(text.split(',')[0].split('')[1]);
    const [value, setValue] = useState(markOfLesson);
    const [isEdit, setIsEdit] = useState(false);
    let dateOfLesson = findDate(dates, dayIndex);
    let markId = 0;
    useEffect(() => {
        markId = findMarkId(marks, dateOfLesson)
    }, [value])
    const handleSend = async () => {
        let mark: IMarksToBD = {classId: 0, date: "", studentId: 0, updatedMark: ""}
        if (markOfLesson !== '-') {
            mark = {
                updatedMark: value !== '-' ? value.toUpperCase().trim() : '',
                studentId: Number(studentID),
                classId: Number(classID),
                date: dateOfLesson,
                markId: markIdFromBD && markIdFromBD.markId ? markIdFromBD.markId : markId
            };
        } else {
            mark = {
                updatedMark: value.toUpperCase().trim(),
                studentId: Number(studentID),
                classId: Number(classID),
                date: dateOfLesson
            };
        }
        await updateMark(mark);
        refetch()
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