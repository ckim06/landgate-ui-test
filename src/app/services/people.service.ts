import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { PersonModel } from '../models/person-model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  private mockPeopleList: PersonModel[] = [
    { id: '5416549e-68d5-4efb-98f8-cc411b4bf401', firstName: 'John', lastName: 'Doe', age: 21, workTitle: 'Wanna be Signer' },
    { id: '39b58e22-5702-4dc6-952c-adafdafbcae3', firstName: 'Jane', lastName: 'Doe', age: 22, workTitle: 'Signer' },
    { id: '270478a8-53a2-4de4-bec3-b32be738b497', firstName: 'Bob', lastName: 'Barker', age: 80, workTitle: 'TV Host' },
    { id: '7fb76b35-7d25-4618-bc6f-af0c089e9e17', firstName: 'John', lastName: 'Doe', age: 21, workTitle: 'Wanna be Signer' },
  ];


  getPeople(): Observable<PersonModel[]> {
    return of(this.mockPeopleList).pipe(delay(100));
  }
}


