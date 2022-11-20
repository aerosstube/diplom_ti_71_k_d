import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {authAPI} from '../services/AuthService';
import userReducer from './reducers/UserSlice';
import {lessonApi} from "../services/LessonService";

const rootReducer = combineReducers({
    userReducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [lessonApi.reducerPath]: lessonApi.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                authAPI.middleware,
                lessonApi.middleware
            )


    });
};


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']