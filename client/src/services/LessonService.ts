import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {ILesson} from '../models/ILesson';



const lessonApi = createApi({
    reducerPath: 'lessonApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8081/api/schedule'}),
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