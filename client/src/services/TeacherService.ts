import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {baseURL} from "./config";
import {RootState} from "../store/store";
import {IGroups} from "../models/IGroups";
import {ILessons} from "../models/ILessons";
import {IBDMarks} from "../models/IBDMarks";
import {IMarksToBD} from "../models/IMarksToBD";


export const teacherAPI = createApi({
    reducerPath: 'teacherAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseURL}/api/teacher`,
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).userReducer.tokens?.tokens.accessToken;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (build) => ({
        fetchGroups: build.query<IGroups[], string>({
            query: () => ({
                url: '/getAllowedGroups',
                method: 'GET',
            }),
        }),
        fetchClasses: build.query<ILessons, string>({
            query: () => ({
                url: '/getAllowedClasses',
                method: 'GET',
            })
        }),
        fetchMarks: build.query<IBDMarks, string>({
            query: (ids: string) => ({
                url: '/getStudentsMarks',
                method: 'GET',
                params: {
                    classId: ids.split('')[1],
                    groupId: ids.split('')[0],
                }
            })
        }),
        updateMarks: build.mutation<any, IMarksToBD>({
            query: (obj: IMarksToBD) => ({
                url: '/updateStudentMark',
                method: 'POST',
                body: obj


            })
        })
    })
});