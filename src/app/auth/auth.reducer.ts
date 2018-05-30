import { AuthActionTypes, AuthUnion } from './auth.actions';
import { State } from '@ngrx/store';
import { InitAuthState, IInitAuthState } from '../store/init';

export function authReducer(
    state: IInitAuthState = InitAuthState,
    action: AuthUnion): IInitAuthState {

    switch (action.type) {
        case AuthActionTypes.LOGIN: {
            return state;
        }
        case AuthActionTypes.REGISTER: {
            return state;
        }
        case AuthActionTypes.AUTH: {
            return state; // typed to number
        }
        default: {
            return state;
        }
    }
}
