import { createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people.actions';
import { PersonModel } from 'src/app/models/person-model';

export const peopleFeatureKey = 'people';

// TODO: Need to add People to the store and initialize it.
export interface State {
  people: PersonModel[];
  loading:boolean;
}

export const initialState: State = {
  people: [],
  loading:false
};


export const reducer = createReducer(
  initialState,
  on(PeopleActions.loadPeoples, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(PeopleActions.loadedPeople, (state, {people}) => {
    return {
      ...state,
      people,
      loading: false
    }
  }),
  on(PeopleActions.savePerson, (state, { person }) => {
    return {
      ...state,
      people: state.people.map((p) => p.id === person.id ? person : p)
    };
  }),
);


