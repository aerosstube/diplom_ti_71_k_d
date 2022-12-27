import React from 'react';
import {Table} from "antd";
import cl from "../TeacherPlaceForMarks/TeacherPFM.module.css";
import {studentApi} from "../../services/StudentService";
import {ColumnsType} from "antd/es/table";
import {IMarkForStudent} from "../../models/IMarkForStudent";

const StudentPlaceForMarks = () => {
    const {data: studentMarks} = studentApi.useFetchAllMarksQuery('');
    console.log(studentMarks)
    // @ts-ignore
    const columns: ColumnsType<DataType> = [{
        key: 0,
        title: 'Предмет',
        dataIndex: 'name'
    }];
    const data: any = [];
    // для колонок
    studentMarks && studentMarks.marks.map((studentMark: IMarkForStudent, index: number) => {
        let year = studentMark.date.split('-')[0];
        let month = studentMark.date.split('-')[1];
        let day = studentMark.date.split('-')[2].split('T')[0];
        let obj = {
            title: day + '.' + month + '.' + year,
            key: studentMark.date,
            dataIndex: index
        }
        columns.push(obj);
    })
    // для самих данных
    let arr: any = []
    // @ts-ignore
    studentMarks.marks.map((studentMark: IMarkForStudent) => {
        arr.push(studentMark.classId)
    })

    return (
        <div>
            <Table columns={columns} className={cl.table} dataSource={data} pagination={false}
                   scroll={{x: 1500}} bordered={true}/>
        </div>
    );
};

export default StudentPlaceForMarks;