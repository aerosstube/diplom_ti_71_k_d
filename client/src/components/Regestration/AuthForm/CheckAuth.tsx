import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAppSelector} from "../../../hooks/hook";


// @ts-ignore
const CheckAuth = ({children}) => {
    const location=useLocation();
    const isLogged= useAppSelector(state => state.userReducer.tokens.tokens.accessToken)
    if (isLogged===''){
        return <Navigate to='/auth' state={{state:location.pathname}}/>

    }
    return children
};

export default CheckAuth;