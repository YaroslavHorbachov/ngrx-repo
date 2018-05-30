import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { CounterActionTypes } from './counter.actions';
import { IInitStateCounter } from '../store/init';
import * as fromRoot from '../store';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent {
    count$: Observable<any>;
    constructor(private store: Store<{ app: fromRoot.AppStore }>) {
        this.count$ = store.select(fromRoot.getCount);
        store.subscribe(data => console.log('Store ', data));
        console.log(this.store);
    }
    dec() {
        console.log(' Dispatch ', this.count$);
        this.store.dispatch({ type: CounterActionTypes.DECREMENT });
    }
    inc() {
        console.log('Dispatch ', this.count$);
        this.store.dispatch({ type: CounterActionTypes.INCREMENT });
    }
    reset(payload) {
        console.log('Dispatch ', this.count$);
        this.store.dispatch({ type: CounterActionTypes.RESET, payload });
    }

}
