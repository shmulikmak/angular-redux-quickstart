import { Component, OnDestroy } from '@angular/core';
import { Action } from 'redux';
import { NgRedux, select } from '@angular-redux/store';
import { CounterActions } from './app.actions';
import { IAppState } from './store';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app works!';
  count: number;
  subscription;
  @select() readonly count$: Observable<number>;

  constructor(private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions) {}

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
