import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import AuthForm from "./components/Regestration/AuthForm/AuthForm";
import RegDataForm from "./components/Regestration/RegForm/RegDataForm";
import LearningWeek from "./components/LearningWeek/LearningWeek";
import CheckAuth from "./components/Regestration/AuthForm/CheckAuth";
import LearningWeekMark from "./components/LearningWeek/LearningWeekMark";
import RegForm from "./components/Regestration/RegForm/RegForm";
import {useRefreshUser} from "./hooks";
import Layout from "./components/Layout";

export function App() {

    const appLoading = useRefreshUser();




    return (
        <div className="App">
            {
                (appLoading)
                    ? <h1>Loading</h1>
                    :
                    <>
                         <Routes>
                            <Route path='/' element={<Layout/>}>
                                <Route path='/regForm' element={<RegForm/>}/>
                                <Route path='/regDataForm' element={<RegDataForm/>}/>
                                <Route path='/auth' element={<AuthForm/>}/>
                                <Route path='/scheduleAndMarks' element={<CheckAuth><LearningWeekMark/></CheckAuth>}/>
                                <Route path='/' element={<RegDataForm/>}/>
                                <Route path='/schedule' element={<CheckAuth><LearningWeek/></CheckAuth>}/>
                            </Route>
                        </Routes>
                    </>
            }

        </div>
    );
}

export default App;
