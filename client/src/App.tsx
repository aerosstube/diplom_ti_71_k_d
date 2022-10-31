import React from 'react';
import './App.css';
import LearningDay from "./UI/learningDay/learningDay";

function App() {
    const lessons = [{title: 'dfafasd', body: 'dfsdfadsfadsf', mark: 5},
        {title: 'qwer', body: 'dfsdfadsfadsf', mark: 5},
        {title: 'ytrewq', body: '1231321', mark: 5},
        {title: 'ytrewq', body: '1231321', mark: 5}
        ]
    return (
        <div className="App">
            <LearningDay lessons={lessons}/>
        </div>
    );
}

export default App;
