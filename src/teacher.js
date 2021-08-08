import Person ,{coolfunction}from './person'
export class Teacher extends Person{
    constructor(name,age,degree){
      super(name,age);
      this.degree=degree;
    }
    teach(){
      console.log('teach');
    }
  }
export function promote(){
    coolfunction();
}
// Teacher and promote are named exports