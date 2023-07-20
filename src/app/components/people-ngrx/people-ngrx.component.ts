import { Component, OnInit } from '@angular/core';
import { selectPeople } from './ngrx/selectors/people.selectors'
import { Store, createAction, select } from '@ngrx/store';
import { State } from './ngrx/reducers/people.reducer';
import * as PeopleActions from './ngrx/actions/people.actions';
@Component({
  selector: 'app-people-component',
  templateUrl: './people-ngrx.component.html',
  styleUrls: ['./people-ngrx.component.scss']
})
export class PeopleNgrxComponent implements OnInit {
  isRowCollapsed: { [index: string]: boolean } = {};
  people$ = this.store.pipe(select(selectPeople));
  // TODO: Include the Store and get the data from the NgrxStore
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(PeopleActions.loadPeoples());
  }
  onCancelSave(id: string) {
    this.isRowCollapsed[id] = !this.isRowCollapsed[id];
  }
  onSave(id: string) {
    this.isRowCollapsed[id] = !this.isRowCollapsed[id];
  }
}
