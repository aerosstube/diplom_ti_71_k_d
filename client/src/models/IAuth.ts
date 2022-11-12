export interface IAuth {
    login: string;
    password: string;
}

export interface ITokens {
    tokens: {
        refreshToken: string;
        accessToken: string;
    };
}

export interface IUserData {
    login: string;
    password: string;
    firstName: string;
    secondName: string;
    middleName: string
    mobilePhone: string
    eMail: string
    dateOfBirthday: string;
    inviteCode: string;
}
