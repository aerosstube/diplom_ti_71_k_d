import React from 'react';
import cl from './Header.module.css'
import img from '../../img/logo.png'
import {ConfigProvider, Dropdown, MenuProps} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {UserSlice} from "../../store/reducers/UserSlice";
import {authAPI} from "../../services/AuthService";
import HeaderTexts from "./HeaderTexts";

const Header = () => {
    const {fullName} = useAppSelector(state => state.userReducer.user);
    const {removeUser} = UserSlice.actions;
    const dispatch = useAppDispatch();
    const [logoutUser] = authAPI.useLogoutUserMutation();
    const arr = fullName.split(' ');
    arr[2] = '';
    const headerName = arr.join(" ");

    const handleLogOut = async () => {
        await logoutUser(null);
        dispatch(removeUser());
    };
    const handleClick: MenuProps['onClick'] = async ({key}) => {
        await handleLogOut();
    };
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <>
                    <LogoutOutlined style={{marginRight: '5px'}}/>
                    Выйти
                </>
            ),
        },

    ];

    return (
        <div className={cl.headerMain}>
            <div className={cl.headerContainImg}>
                <img src={img} alt="SHP" className={cl.headerImg}/>
                <Link to='/regForm' className={cl.headerMainText}>Школьный портал</Link>
            </div>
            <HeaderTexts/>
            {
                fullName &&
                <ConfigProvider
                    theme={{
                        token: {colorText: '#0095FFDB',}

                    }}
                >
                    <Dropdown menu={{items, onClick: handleClick}} placement="bottom"
                              overlayClassName={cl.exitMenu}
                              trigger={['click']}>
                        <h2 className={cl.headerText}>{headerName}</h2>
                    </Dropdown>
                </ConfigProvider>
            }
            {
                !fullName && <Link className={cl.headerText} to='/auth'>Авторизуйтесь</Link>
            }
        </div>

    );
};

export default Header;