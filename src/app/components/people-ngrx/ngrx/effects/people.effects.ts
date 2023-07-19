import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map } from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import * as PeopleActions from '../actions/people.actions';
import {loadedPeople} from '../actions/people.actions';
import { PeopleService } from 'src/app/services/people.service';
import { PersonModel } from 'src/app/models/person-model';

@Injectable()
export class PeopleEffects {


  loadPeoples$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PeopleActions.loadPeoples),
      // TODO Implement a Load People Action that gets the data from the service.
      
      concatMap(() => this.peopleService.getPeople().pipe(
        map((people:PersonModel[]) =>  PeopleActions.loadedPeople(people))
      ))
    );
  });


  constructor(private actions$: Actions, private peopleService: PeopleService) {}

}
