import { Action } from '@ngrx/store';

export enum CounterActionTypes {
    INCREMENT = '[Counter] Increment',
    DECREMENT = '[Counter] Decrement',
    RESET = '[Counter] Reset',
}
export class Increment implements Action {
    type: CounterActionTypes.INCREMENT;
    payload: number;
}

export class Decrement implements Action {
    type: CounterActionTypes.DECREMENT;
    payload: number;
}

export class Reset implements Action {
    type: CounterActionTypes.RESET;
    payload: number;
}

export type CounterUnion = Increment | Decrement | Reset;
