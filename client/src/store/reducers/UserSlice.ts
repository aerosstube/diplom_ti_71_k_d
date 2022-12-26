import {IUser} from '../../models/IUser';
import {ITokens} from '../../models/IAuth';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
    user: IUser;
    tokens: ITokens;
    isLogged: boolean;
}

const initialState: UserState = {
    user: {
        userId: 0,
        fullName: '',
        login: '',
        role: '',
        iat: 0,
        exp: 0,
        inviteCode: '',
        isTeacher: false
    },
    tokens: {
        tokens: {
            accessToken: '',
            refreshToken: ''
        }
    },
    isLogged: false,

};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<UserState>) {
            state.user = action.payload.user;
            state.tokens = action.payload.tokens;
            state.isLogged = action.payload.isLogged;
        },
        addCode(state, action: PayloadAction<string>) {
            state.user.inviteCode = action.payload;
        },
        removeUser(state) {
            state.user = initialState.user;
            state.tokens = initialState.tokens;
            state.isLogged = initialState.isLogged;
        }
    }
});

export default UserSlice.reducer;
export const {removeUser} = UserSlice.actions;
