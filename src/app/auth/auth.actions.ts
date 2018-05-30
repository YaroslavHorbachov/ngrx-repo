import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    LOGIN = '[AUTH] Login',
    REGISTER = '[AUTH] Register',
    AUTH = '[AUTH] Auth',
}
export class Login {
    type: AuthActionTypes.LOGIN;
    payload: any;
}

export class Register {
    type: AuthActionTypes.REGISTER;
    payload: any;
}

export class Auth {
    type: AuthActionTypes.AUTH;
    payload: any;
}

export type AuthUnion = Login | Register | Auth;
