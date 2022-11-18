import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAppSelector} from "../../../hooks/hook";


// @ts-ignore
const CheckAuth = ({children}) => {
    // @ts-ignore
    function getMonday(d) {
  d = new Date(d);
  let day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1);
  let res = new Date(d.setDate(diff));
  res.setHours(0);
  res.setMinutes(0);
  res.setSeconds(0);
  res.setMilliseconds(0);
  res.toISOString();
  return res;
}

console.log(getMonday(new Date()));
    const location=useLocation();
    const isLogged= useAppSelector(state => state.userReducer.tokens.tokens.accessToken)
    if (isLogged===''){
        return <Navigate to='/auth' state={{state:location.pathname}}/>

    }
    return children
};

export default CheckAuth;