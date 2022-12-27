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
import TeacherPlaceForMarks from "./components/TeacherPlaceForMarks/TeacherPlaceForMarks";
import Groups from "./components/Groups/Groups";
import LessonsChoise from "./components/Groups/LessonsChoise";
import StudentPlaceForMarks from "./components/StudentPlaceForMarks/StudentPlaceForMarks";

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
                            <Route path='/' element={<Layout/>}> {/*Корневая страница*/}
                                <Route path='/lessons' element={<LessonsChoise/>}/>
                                <Route path='/teacherPlace' element={<CheckAuth><TeacherPlaceForMarks/></CheckAuth>}/>
                                <Route path='/studentMarks' element={<CheckAuth><StudentPlaceForMarks/></CheckAuth>}/>
                                <Route path='/regForm' element={<RegForm/>}/> {/*Форма регистрации*/}
                                <Route path='/regDataForm'
                                       element={<RegDataForm/>}/> {/*Форма заполнения данных для регистрации*/}
                                <Route path='/auth' element={<AuthForm/>}/> {/*Форма аутентифакации*/}
                                <Route path='/scheduleAndMarks'
                                       element={<CheckAuth><LearningWeekMark/></CheckAuth>}/> {/*Успеваемость*/}
                                <Route path='/schedule'
                                       element={<CheckAuth><LearningWeek/></CheckAuth>}/> {/*Расписание*/}
                                <Route path='/groups' element={<CheckAuth><Groups/></CheckAuth>}/>
                            </Route>
                        </Routes>
                    </>
            }

        </div>
    );
}

export default App;
