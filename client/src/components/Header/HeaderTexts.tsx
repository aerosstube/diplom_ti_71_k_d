import React from 'react';
import cl from "./Header.module.css";
import {NavLink} from "react-router-dom";

const HeaderTexts = () => {
    const isTeacher = true;
    return (
        <>
            {isTeacher ?
                <div className={cl.headerContain}>
                    <NavLink to='/groups'
                             className={({isActive}) => isActive ? cl.activeLink : cl.headerText}>Группы</NavLink>
                    <NavLink to='/schedule'
                             className={({isActive}) => isActive ? cl.activeLink : cl.headerText}>Расписание</NavLink>
                </div>
                :
                <div className={cl.headerContain}>
                    <NavLink to='/scheduleAndMarks'
                             className={({isActive}) => isActive ? cl.activeLink : cl.headerText}>Успеваемость</NavLink>
                    <NavLink to='/schedule'
                             className={({isActive}) => isActive ? cl.activeLink : cl.headerText}>Расписание</NavLink>
                </div>

            }
        </>
    );
};

export default HeaderTexts;