import React, {FC} from 'react';
import cl from './teacherMarkPlace.module.css';
import {Button, Table, TableBody, TableHead, TableRow} from '@mui/material';
import {StyledTableCell} from '../../UI/StyledTableCell';
import {TeacherMarkPlaceProps} from '../../models/TeacherMarkPlaceProps';


const TeachersMarkPlace: FC<TeacherMarkPlaceProps> = ({teacherUser}) => {
    const data = [{
        dateOfLesson: '21.03.1994',
        studentName: 'Буханов Д.Д.',
        markOfLesson: [5, 4, 5]
    }, {dateOfLesson: '210394', studentName: 'Валетов С.А.', markOfLesson: [5, 3, 2]}, {
        dateOfLesson: '210394',
        studentName: 'Васюнин Т.А.',
        markOfLesson: [5, 5, 2]
    }];

    return (
        <div className={cl.forma}>
            <form className={cl.table}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ФИО Студента</StyledTableCell>
                            {data.map((date1) =>
                                <StyledTableCell>{date1.dateOfLesson}</StyledTableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((date) =>
                            <TableRow>
                                <StyledTableCell>{date.studentName}</StyledTableCell>
                                {
                                    date.markOfLesson.map((mark) =>
                                        <StyledTableCell>{teacherUser ?
                                            <input className={cl.inp} pattern="2|3|4|5|[Нн]|[Бб]"
                                                   defaultValue={mark}/> :
                                            <input className={cl.inp} disabled pattern="2|3|4|5|[Нн]|[Бб]"
                                                   defaultValue={mark}/>}</StyledTableCell>
                                    )
                                }
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <Button className={cl.but} variant="outlined" type="submit">Сохранить оценки</Button>
            </form>
        </div>
    );
};
//Бля крч надо структуру данных продумать(переделать мэп-отрисовку)
// поебланиться со стилями еще
// ну и инпуты сделать человечески
// Придумать с цветами оценок
export default TeachersMarkPlace;