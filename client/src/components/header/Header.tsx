import {AppBar, Toolbar, Typography} from '@mui/material';
import {useAppSelector} from '../../hooks/hook';

const Header = () => {
    const {firstName,secondName,middleName} = useAppSelector(state => state.userDataReducer.user);
    return (
        <AppBar position={'static'}>
            <Toolbar>
                <Typography
                    variant="h5"
                >
                    Школьный портал
                </Typography>

                <Typography
                    sx={{
                        marginLeft: 'auto'
                    }}
                >
                    {firstName}
                </Typography>

            </Toolbar>
        </AppBar>
    );
};

export default Header;