import React from 'react';
import './App.css';
import Header from './components/header/Header';
import AuthForm from './components/Regestration/AuthForm/AuthForm';
import RegForm from './components/Regestration/RegForm/RegForm';
import RegDataForm from './components/Regestration/RegForm/RegDataForm';

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
    ];
    return (
        <div className="App">
            <Header/>
            <RegDataForm/>
            </div>
    );
}

export default App;
