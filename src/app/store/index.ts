import {
    StoreModule, Action, MetaReducer, ActionReducer,
    combineReducers, ActionReducerMap, createFeatureSelector, createSelector
} from '@ngrx/store';
import { InitAuthState, InitStateCounter, IInitAuthState, IInitStateCounter } from './init';
import * as fromCounter from '../counter/counter.reducer';
import { authReducer } from '../auth/auth.reducer';
import { AuthUnion } from '../auth/auth.actions';
import { CounterUnion } from '../counter/counter.actions';

export interface AppStore {
    counter: fromCounter.State;
    auth: IInitAuthState;
}
export const reducers: ActionReducerMap<AppStore> = {
    counter: fromCounter.counterReducer,
    auth: authReducer
};

export const getCountState = createFeatureSelector<fromCounter.State>('counter');
export const getCount = createSelector(getCountState, (state) => state.counter);
export default StoreModule.forRoot(reducers);
