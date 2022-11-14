import {AppBar, Toolbar, Typography} from '@mui/material';
import {useAppSelector} from '../../hooks/hook';
import {Link, Route, Routes} from 'react-router-dom';
import TeachersMarkPlace from '../TeacherMarkPlace/TeachersMarkPlace';
import cl from '../TeacherMarkPlace/teacherMarkPlace.module.css';
import RegDataForm from '../Regestration/RegForm/RegDataForm';
import LearningWeek from '../LearningWeek/LearningWeek';

const Header = () => {
    const {firstName,secondName,middleName} = useAppSelector(state => state.userDataReducer.user);
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
        <>
        <AppBar position={'static'}>
            <Toolbar>
                <Typography
                    variant="h5"
                >
                   <Link to='/' style={{color:'white',textDecoration:'none'}}>Школьный портал</Link>
                </Typography>
                    <Link to='/markPlace' className={cl.links}>Успеваемость</Link>
                 <Link to='/schedule' className={cl.links}>Расписание</Link>
                <Typography
                    sx={{
                        marginLeft: 'auto'
                    }}
                >
                    {firstName}
                </Typography>

            </Toolbar>
        </AppBar>
           <Routes>
               <Route path='/markPlace' element={<TeachersMarkPlace teacherUser={true}/>}/>
               <Route path='/' element={<RegDataForm/>}/>
               <Route path='/schedule' element={<LearningWeek days={days}/>}/>
           </Routes>
            </>
    );
};

export default Header;