import {AppBar, Toolbar, Typography} from "@mui/material";

const Header = () => {
    return (
        <AppBar position={"static"}>
            <Toolbar>
                <Typography
                variant='h5'
                >
                    Школьный портал
                </Typography>

                <Typography
                    sx={{
                        marginLeft: 'auto'
                }}
                >
                    Буханов Данила
                </Typography>

            </Toolbar>
        </AppBar>
    );
};

export default Header;