import {IBDMarks} from "../models/IBDMarks";
import {IColumnData} from "../models/IColumnData";
import {ColumnsType} from "antd/es/table";

export const convertColumnData = (data: IBDMarks, toBD: boolean) => {
    const columnData: ColumnsType<IColumnData> = [{
        title: 'ФИО СТУДЕНТА',
        dataIndex: 'name',
        key: 'name',
    }];

    if (toBD) {
        console.log('ZAGLUSHKA')
    } else {
        data && data.classes.map((dClass, index) => {
            let year = dClass.start_time.split('-')[0];
            let month = dClass.start_time.split('-')[1];
            let day = dClass.start_time.split('-')[2].split('T')[0];
            let obj = {
                title: day + '.' + month + '.' + year,
                dataIndex: +index,
                key: dClass.start_time,
            }
            columnData.push(obj);
        })
    }
    return columnData;
}
