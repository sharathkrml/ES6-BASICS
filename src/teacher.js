import { Person } from './person'
export class Teacher extends Person{
    constructor(name,age,degree){
      super(name,age);
      this.degree=degree;
    }
    teach(){
      console.log('teach');
    }
  }