import { Component, Input, OnInit } from "@angular/core";
import { selectPeople } from "./ngrx/selectors/people.selectors";
import { Store, createAction, select } from "@ngrx/store";
import { State } from "./ngrx/reducers/people.reducer";
import * as PeopleActions from "./ngrx/actions/people.actions";
import { PersonModel } from "src/app/models/person-model";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-people-edit-component",
  templateUrl: "./people-ngrx-edit-form.component.html",
  styleUrls: ["./people-ngrx-edit-form.component.scss"],
})
export class PeopleNgrxEditFormComponent implements OnInit {
  @Input() person: PersonModel;
  editForm: FormGroup;
  constructor(private store: Store<State>, private fb: FormBuilder) {}

  ngOnInit() {


    this.editForm = this.fb.group({
        firstName: [this?.person?.firstName, Validators.required],
        lastName: [this?.person?.lastName, Validators.required],
        age: [this?.person?.age, Validators.required],
        workTitle: [this?.person?.workTitle, Validators.required],
      });



  }
  saveEdit(form: FormGroup) {
    
  }
}
