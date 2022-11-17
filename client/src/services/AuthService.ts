import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IAuth, ITokens, IUserData } from '../models/IAuth';

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://10.99.97.13:8082/api/auth'}),
    endpoints: (build) => ({
        userLogin: build.mutation<ITokens, IAuth>({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: {user}
            })
        }),
        userRegestration: build.mutation<ITokens, IUserData>({
            query: (user) => ({
                url: '/registration',
                method: 'POST',
                body: {user}
            })

        })
    })
});