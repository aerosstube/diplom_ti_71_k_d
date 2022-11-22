import {AppBar, Toolbar, Typography} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';
import cl from '../TeacherMarkPlace/teacherMarkPlace.module.css';
import {authAPI} from "../../services/AuthService";
import {UserSlice} from "../../store/reducers/UserSlice";

const Header = () => {
    const {fullName} = useAppSelector(state => state.userReducer.user);
    const {removeUser} = UserSlice.actions;
    const dispatch = useAppDispatch();
    const [logoutUser, {}] = authAPI.useLogoutUserMutation();
    const arr = fullName.split(' ');
    arr[2] = '';
    const headerName = arr.join(" ");

    const handleLogOut = async () => {
        await logoutUser(null);
        dispatch(removeUser());
    };

    return (
        <>
            <AppBar position={'static'}>
                <Toolbar>
                    <Typography
                        variant="h5"
                    >
                        <Link to='/regForm' style={{color: 'white', textDecoration: 'none'}}>Школьный портал</Link>
                    </Typography>
                    <Link to='/scheduleAndMarks' className={cl.links}>Успеваемость</Link>
                    <Link to='/schedule' className={cl.links}>Расписание</Link>
                    <Typography
                        sx={{
                            marginLeft: 'auto'
                        }}
                    >
                        {fullName && <p className={cl.links} onClick={handleLogOut}>{headerName}</p>}
                        {!fullName && <Link to='/auth' className={cl.links}>Авторизоваться</Link>}
                    </Typography>

                </Toolbar>
            </AppBar>

        </>
    );
};

export default Header;