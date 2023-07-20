import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
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

  @Output() cancelSave = new EventEmitter<null>();
  @Output() save = new EventEmitter<null>();
 
  private initialPerson:PersonModel;
  editForm: FormGroup;
  constructor(private store: Store<State>, private fb: FormBuilder) {}

  ngOnInit() {
    this.initialPerson = this.person;

    this.editForm = this.fb.group({
        firstName: [this?.person?.firstName, Validators.required],
        lastName: [this?.person?.lastName, Validators.required],
        age: [this?.person?.age, Validators.required],
        workTitle: [this?.person?.workTitle, Validators.required],
      });



  }
  saveEdit(form: FormGroup) {
    this.store.dispatch(PeopleActions.savePerson({...form.value, id: this.initialPerson.id}));
    this.save.emit();
  }
  cancel(){
    this.person = this.initialPerson;
    this.cancelSave.emit();
  }
}
