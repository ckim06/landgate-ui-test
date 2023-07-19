import { createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people.actions';
import { PersonModel } from 'src/app/models/person-model';

export const peopleFeatureKey = 'people';

// TODO: Need to add People to the store and initialize it.
export interface State {
  people: PersonModel[];
}

export const initialState: State = {
  people: []
};


export const reducer = createReducer(
  initialState,
  on(PeopleActions.loadedPeople, (state, action) => {
    return {
      ...state,
      people:action.people
    }
    return state;
  }),

);

