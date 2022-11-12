import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {ILesson} from '../models/ILesson';


const lessonApi = createApi({
    reducerPath: 'lessonApi',
    baseQuery: fetchBaseQuery({baseUrl: 'fhkgfghfghfgh'}),
    endpoints: (build) => ({
        fetchLessons: build.query<ILesson, number>({
            query: (limit: number = 6) => ({
                url: '/kasjdhfak'
            })
        })
    })
});