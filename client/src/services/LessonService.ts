import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {ScheduleDay} from '../models/ISchedule';
import {RootState} from "../store/store";


export const lessonApi = createApi({
    reducerPath: 'lessonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.99.97.13:8082/api/schedule',
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).userReducer.tokens?.tokens.accessToken;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (build) => ({
        fetchLessons: build.query<ScheduleDay[], string>({
            query: (startOfWeek) => ({
                url: '/get_week',
                method: 'GET',
                params: {
                    startOfWeek
                }
            })
        })
    })
});