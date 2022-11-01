import React from 'react';
import './App.css';
import LearningWeek from "./UI/LearningWeek/LearningWeek";

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
