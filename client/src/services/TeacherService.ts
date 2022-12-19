import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {baseURL} from "./config";
import {RootState} from "../store/store";


export const teacherAPI = createApi({
    reducerPath: 'teacherAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseURL}/api/schedule`,
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).userReducer.tokens?.tokens.accessToken;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (build) => ({
        fetchGroups: build.query<string[], string>({
            query: (startOfWeek) => ({
                url: '/get_week_marks',
                method: 'GET',
                params: {
                    startOfWeek
                }

            }),
        })
    })
});