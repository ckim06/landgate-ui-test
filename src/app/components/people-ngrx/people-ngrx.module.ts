import { NgModule } from '@angular/core';
import { PeopleNgrxComponent } from './people-ngrx.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPeople from './ngrx/reducers/people.reducer';
import { PeopleEffects } from './ngrx/effects/people.effects';
import { CommonModule } from '@angular/common';
import {PeopleNgrxEditFormComponent} from './people-ngrx-edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [PeopleNgrxComponent, PeopleNgrxEditFormComponent],
  exports: [PeopleNgrxComponent],
  imports: [NgbCollapseModule, ReactiveFormsModule, CommonModule, StoreModule.forFeature(fromPeople.peopleFeatureKey, fromPeople.reducer), EffectsModule.forFeature([PeopleEffects])]
})
export class PeopleNgrxModule {
}
