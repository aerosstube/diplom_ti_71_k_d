import React from 'react';
import {Navigate} from "react-router-dom";


// @ts-ignore
const CheckAuth = ({children}) => {
    const isLogged = localStorage.getItem('token')

    if (isLogged === '') {
        return <Navigate to='/auth'/>

    }
    return children

};

export default CheckAuth;