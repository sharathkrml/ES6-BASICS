export default class Person{
    constructor(name,age){
      this.name=name;
      this.age=age;
    }
    walk(){
      console.log('walk');
    }
  }
//export default Person
export function coolfunction(){
    console.log('cool')
}