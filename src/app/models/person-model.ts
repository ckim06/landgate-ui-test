export class PersonModel {
  public id:string;
  public firstName: string;
  public lastName: string;
  public age: number;
  public workTitle: string;

  constructor(dataIn: any) {
    if (dataIn.id && dataIn.id?.length > 0) {
      this.id = dataIn.id;
    }
    if (dataIn.firstName && dataIn.firstName?.length > 0) {
      this.firstName = dataIn.firstName;
    }
    if (dataIn.lastName && dataIn.lastName?.length > 0) {
      this.lastName = dataIn.lastName;
    }
    if (dataIn.age && typeof dataIn.age === 'number') {
      this.age = dataIn.age;
    }
    if (dataIn.workTitle && dataIn.workTitle?.length > 0) {
      this.workTitle = dataIn.workTitle;
    }
  }
}
