import { CounterActionTypes, CounterUnion } from './counter.actions';
import { InitStateCounter, IInitStateCounter } from '../store/init';
import { createSelector } from '@ngrx/store';

export interface State {
    counter: number;
}
export function counterReducer(
    state: IInitStateCounter = InitStateCounter,
    action: CounterUnion): State {

    switch (action.type) {
        case CounterActionTypes.INCREMENT: {
            return { counter: state.counter++ };
        }
        case CounterActionTypes.DECREMENT: {
            return { counter: state.counter-- };
        }
        case CounterActionTypes.RESET: {
            return { counter: action.payload };
        }
        default: {
            return state;
        }
    }
}

export const getCount = (state) => state.counter;
