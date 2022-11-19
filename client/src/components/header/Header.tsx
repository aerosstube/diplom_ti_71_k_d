import {AppBar, Toolbar, Typography} from '@mui/material';
import {useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';
import cl from '../TeacherMarkPlace/teacherMarkPlace.module.css';

const Header = () => {
    const {fullName} = useAppSelector(state => state.userReducer.user);
    const arr = fullName.split(' ');
    arr[2]='';
    const headerName=arr.join(" ");
    return (
        <>
        <AppBar position={'static'}>
            <Toolbar>
                <Typography
                    variant="h5"
                >
                   <Link to='/regForm' style={{color:'white',textDecoration:'none'}}>Школьный портал</Link>
                </Typography>
                    <Link to='/scheduleAndMarks' className={cl.links}>Успеваемость</Link>
                 <Link to='/schedule' className={cl.links}>Расписание</Link>
                <Typography
                    sx={{
                        marginLeft: 'auto'
                    }}
                >
                    {fullName && headerName}
                    {!fullName && <Link to='/auth'>Авторизоваться</Link>}
                </Typography>

            </Toolbar>
        </AppBar>

            </>
    );
};

export default Header;