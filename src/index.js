//we have person object
const person={
  name:'Sharath',
  walk(){
    console.log('walk')
  }
};
//if we want another person object
const person2={
  name:'Sharath2',
  walk(){
    console.log('walk')
  }
};
//if implementaion of walk has any issues,debugging is complex
//when we have an object with atleast one method,we need a blueprint to create objects of that type
//class solves the problem
class Person{
  //special method called constructor
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  walk(){
    console.log('walk')
  }
}
//sharath object of Person Class
const sharath = new Person('sharath',21)
console.log(sharath)
sharath.walk()