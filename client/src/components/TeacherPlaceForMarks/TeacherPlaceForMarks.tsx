import React from 'react';
import {Input, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import cl from './TeacherPFM.module.css'
import {useLocation} from "react-router-dom";

const TeacherPlaceForMarks = () => {

    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        tags: string[];
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'ФИО СТУДЕНТА',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: 'Оценка за фвфвддлоыфв',
            dataIndex: 'age',
            key: 'age',
            render: (text) => <Input value={text} className={cl.tableCells} pattern="2|3|4|5|[Нн]|[Бб]"/>,
        },
        {
            title: 'Оценка за фвфвддлоыфв',
            dataIndex: 'address',
            key: 'address',
            render: (text) => <Input value={text} className={cl.tableCells} pattern="2|3|4|5|[Нн]|[Бб]"/>,
        },
        {
            title: 'Оценка за фвфвддлоыфв',
            key: 'tags',
            dataIndex: 'tags',
            render: (text) => <Input value={text} className={cl.tableCells} pattern="2|3|4|5|[Нн]|[Бб]"/>,
        },
        {
            title: 'Оценка за фвфвддлоыфв',
            key: 'action',
            render: (text) => <Input value={text} className={cl.tableCells} pattern="2|3|4|5|[Нн]|[Бб]"/>,
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '4',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    const location = useLocation();
    return (
        <div className={cl.tableContain}>
            <p className={cl.tableText}>Группа {location.state.name}, {location.state.nameOfLesson} </p>
            <Table columns={columns} className={cl.table} dataSource={data} pagination={false}
                   scroll={{x: 1500, y: 500}} bordered={true}/>
        </div>
    );
};

export default TeacherPlaceForMarks;