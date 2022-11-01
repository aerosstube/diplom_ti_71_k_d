import React from 'react';
import './App.css';
import LearningDay from "./UI/learningDay/learningDay";
import LearningWeek from "./UI/LearningWeek/LearningWeek";
import LessonPage from "./UI/LessonPage/LessonPage";
import {ReactComponent} from "*.svg";
import Regestration from "./UI/Regestration/Regestration";

function App() {
    const days = [
        {
            nameOfDay: 'понедельник',
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
    ]
    return (
        <div className="App">
            <LearningWeek days={days}/>
        </div>
    );
}

export default App;
