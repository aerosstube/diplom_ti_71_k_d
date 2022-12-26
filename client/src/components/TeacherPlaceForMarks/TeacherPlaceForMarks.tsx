import React from 'react';
import {Table} from "antd";
import {ColumnsType} from "antd/es/table";
import cl from './TeacherPFM.module.css'
import {useLocation} from "react-router-dom";
import {teacherAPI} from "../../services/TeacherService";
import {convertColumnData} from "../../utils/ConvertColumnData";
import {convertTableData} from "../../utils/ConvertTableData";
import TableCell from "../TableCell/TableCell";
import {FindStudentID} from "../../utils/FindStidentID";

const TeacherPlaceForMarks = () => {
    const location = useLocation();
    const arg = location.state.groupID.toString() + location.state.classID.toString();
    const {data: marks} = teacherAPI.useFetchMarksQuery(arg);

    // @ts-ignore
    const columns: ColumnsType<DataType> = convertColumnData(marks, false);
    const columnsRender = {
        render: (text: string, record: any) => {
            // @ts-ignore
            const studentID = FindStudentID(marks, record.name)
            return <TableCell
                text={(text + ',' + record.name).toString()}
                studentID={studentID}
                // @ts-ignore
                dates={marks.classes}
                classID={location.state.classID}
            />
        }
    }
    const finalColumns: any = [];
    for (let i = 0; i < columns.length; i++) {
        if (i >= 1) {
            // @ts-ignore
            finalColumns[i] = Object.assign({}, columns[i], columnsRender)
        } else {
            finalColumns[i] = columns[i];
        }
    }
    // @ts-ignore
    const data: any[] = convertTableData(marks, false)
    return (
        <div className={cl.tableContain}>
            <p className={cl.tableText}>Группа {location.state.name}, {location.state.nameOfLesson} </p>
            <Table columns={finalColumns} className={cl.table} dataSource={data} pagination={false}
                   scroll={{x: 1500}} bordered={true}/>
        </div>
    );
};

export default TeacherPlaceForMarks;