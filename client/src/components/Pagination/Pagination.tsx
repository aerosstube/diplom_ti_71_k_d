import React, {FC} from 'react';
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import cl from './Pagination.module.css'

const Pagination: FC<String> = (nameOfWeek) => {
    function increment() {
        const today = new Date();
        const day = today.getDate();
        today.setDate(day + 7)
        console.log(today)
    }

    return (
        <div className={cl.pageContain}>
            <LeftOutlined className={cl.pageIcon}/>
            <h4 className={cl.pageText}> {nameOfWeek} </h4>
            <RightOutlined className={cl.pageIcon}/>
        </div>
    );
};

export default Pagination;