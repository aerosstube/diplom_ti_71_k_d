import {ITokens, IUserData} from '../../models/IAuth';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserDataState {
    user: IUserData;
    tokens: ITokens;
    isLogged: boolean;
}

const initialState: UserDataState = {
    user: {
        login: '',
        password: '',
        firstName: '',
        secondName: '',
        middleName:'' ,
        mobilePhone:'' ,
        eMail: '',
        dateOfBirthday:'' ,
        inviteCode: '30'

    },
    tokens: {
        tokens: {
            accessToken: '',
            refreshToken: ''
        }
    },
    isLogged: false
};

export const UserDataSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addDataUser(state, action: PayloadAction<UserDataState>) {
            state.user = action.payload.user;
            state.tokens = action.payload.tokens;
            state.isLogged = action.payload.isLogged;
        }
    }
});

export default UserDataSlice.reducer;