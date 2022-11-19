import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IAuth, ITokens} from '../models/IAuth';
import {IUserData} from "../models/IUser";

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://10.99.97.13:8082/api'}),
    endpoints: (build) => ({
        userLogin: build.mutation<ITokens, IAuth>({
            query: (user) => ({
                url: '/auth/login',
                method: 'POST',
                body: {user}
            })
        }),
        userRegister: build.mutation<ITokens, IUserData>({
            query: (user) => ({
                url: '/auth/registration',
                method: 'POST',
                body: {user}
            })
        }),
        userCodeReg: build.mutation<string,string>({
            query:(inviteCode:string) => ({
                url: `/inviteCode/check`,
                method: 'get',
                params:{
                    inviteCode
                }

            })
        }),
        refresh: build.query<any,string>({
            query:() => ({
                url: '/auth/refresh',
                method: 'get'
            })
        })
    })
});