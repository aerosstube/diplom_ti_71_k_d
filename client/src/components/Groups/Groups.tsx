import React from 'react';
import cl from './Groups.module.css'
import {useNavigate} from "react-router-dom";
import {Button} from "antd";


const Groups = () => {
    const navigate = useNavigate();
    const goToMarks = (name: string) => navigate('/lessons', {state: {name: name, lesson: ''}});
    const names = [
        'ТИ-71', 'ТБД-72', 'ТР-71', 'ТИП-71', 'ТИ-71',
    ];
    return (
        <div className={cl.groupContain}>
            {
                names && names.map((name) => <Button className={cl.groupBlock}
                                                     onClick={() => goToMarks(name)}>{name}</Button>)
            }


        </div>
    );
};

export default Groups;