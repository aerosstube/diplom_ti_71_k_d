import React from 'react';
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../../hooks";


// @ts-ignore
const CheckAuth = ({children}) => {
    const isLogged = useAppSelector(state => state.userReducer.tokens.tokens.accessToken)

    if (isLogged===''){
        return <Navigate to='/auth'/>

    }
    return children

};

export default CheckAuth;