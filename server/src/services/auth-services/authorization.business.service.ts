import {Transaction} from "sequelize";

export interface AuthOptions {
    email?: string;
    login: string;
    password: string;
}

export interface AuthUser {
    userId: number;
    login: string;
    first_name: string;
    second_name: string;
    middle_name?: string;
    date_birthday: string;
    mobile_phone?: string;
    'e-mail'?: string;
}

export class AuthorizationBusinessService {

    public static async loginUser(authOptions: AuthOptions, transaction: Transaction) {
        // const user : AuthUser = await AuthorizationService.
    }
}