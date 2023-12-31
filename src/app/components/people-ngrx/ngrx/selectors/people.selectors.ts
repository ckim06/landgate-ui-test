import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPeople from '../reducers/people.reducer';

export const selectPeopleState = createFeatureSelector<fromPeople.State>(
  fromPeople.peopleFeatureKey
);

// TODO: need to add a selector for people.
export const selectPeople = createSelector(
  selectPeopleState,
  (state: fromPeople.State) => state.people
);

export const isPeopleLoading = createSelector(
  selectPeopleState,
  (state: fromPeople.State) => state.loading
);