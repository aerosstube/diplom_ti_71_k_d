import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {ILesson} from '../models/ILesson';



const lessonApi = createApi({
    reducerPath: 'lessonApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://10.99.97.13:8082/api/schedule'}),
    endpoints: (build) => ({
        fetchLessons: build.mutation<ILesson, string>({
            query: () => ({
                url: '/schedule',
                method:'POST',
                body:{}
            })
        })
    })
});