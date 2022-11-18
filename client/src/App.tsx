import React from 'react';
import './App.css';
import Header from './components/header/Header';
import {Route, Routes} from "react-router-dom";
import AuthForm from "./components/Regestration/AuthForm/AuthForm";
import RegDataForm from "./components/Regestration/RegForm/RegDataForm";
import LearningWeek from "./components/LearningWeek/LearningWeek";
import CheckAuth from "./components/Regestration/AuthForm/CheckAuth";
import LearningWeekMark from "./components/LearningWeek/LearningWeekMark";

export function App() {
    const days = [
        {
            nameOfDay: 'Расписание',
            lessons: [{title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {
                title: 'dfafasd',
                body: 'dfsdfadsfadsf',
                mark: 5
            }, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}]

        },
        {
            nameOfDay: 'Вторник',
            lessons: [{title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {
                title: 'dfafasd',
                body: 'dfsdfadsfadsf',
                mark: 5
            }, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}]

        },
        {
            nameOfDay: 'Среда',
            lessons: [{title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {
                title: 'dfafasd',
                body: 'dfsdfadsfadsf',
                mark: 5
            }, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}]

        },
        {
            nameOfDay: 'Четверг',
            lessons: [{title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {
                title: 'dfafasd',
                body: 'dfsdfadsfadsf',
                mark: 5
            }, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {
                title: 'dfafasd',
                body: 'dfsdfadsfadsf',
                mark: 5
            }]

        },
        {
            nameOfDay: 'Пятница',
            lessons: [{title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {
                title: 'dfafasd',
                body: 'dfsdfadsfadsf',
                mark: 5
            }, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}]

        },
        {
            nameOfDay: 'Суббота',
            lessons: [{title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}]

        }
    ];
    const days1 = [
        {
            nameOfDay: 'Успеваемость',
            lessons: [{title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {
                title: 'dfafasd',
                body: 'dfsdfadsfadsf',
                mark: 5
            }, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}]

        },
        {
            nameOfDay: 'Вторник',
            lessons: [{title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {
                title: 'dfafasd',
                body: 'dfsdfadsfadsf',
                mark: 5
            }, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}]

        },
        {
            nameOfDay: 'Среда',
            lessons: [{title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {
                title: 'dfafasd',
                body: 'dfsdfadsfadsf',
                mark: 5
            }, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}]

        },
        {
            nameOfDay: 'Четверг',
            lessons: [{title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {
                title: 'dfafasd',
                body: 'dfsdfadsfadsf',
                mark: 5
            }, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {
                title: 'dfafasd',
                body: 'dfsdfadsfadsf',
                mark: 5
            }]

        },
        {
            nameOfDay: 'Пятница',
            lessons: [{title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {
                title: 'dfafasd',
                body: 'dfsdfadsfadsf',
                mark: 5
            }, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}, {title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}]

        },
        {
            nameOfDay: 'Суббота',
            lessons: [{title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5}]

        }
    ];

    // @ts-ignore
    function getMonday(d) {
        d = new Date(d);
        let day = d.getDay();
        let diff = d.getDate() - day + (day == 0 ? -6 : 1);

        let res = new Date(d.setDate(diff));
        res.setHours(0);
        res.setMinutes(0);
        res.setSeconds(0);
        res.setMilliseconds(0);
        return res.toISOString()

    }

    const mainDate = getMonday(new Date());

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/auth' element={<AuthForm/>}/>
                <Route path='/scheduleAndMarks' element={<CheckAuth><LearningWeekMark days={days1}/></CheckAuth>}/>
                <Route path='/' element={<RegDataForm/>}/>
                <Route path='/schedule' element={<CheckAuth><LearningWeek days={days}/></CheckAuth>}/>
            </Routes>
        </div>
    );
}

export default App;
