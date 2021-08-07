//this returns reference to the current object
const person = {
  name:'Sharath',
  walk(){
    console.log(this);
  }
};
//if called function outside object,this references window object
// calling a function as standalone function
const oldwalk = person.walk;
oldwalk();
//in JS,every function is an object,they have properties and methods we can use
//with bind method,we can set value of this permanently
const newwalk = person.walk.bind(person);
newwalk();
//when we set bind with walk function,we get a new walk function
// in newwalk function,value of this is based on argument passed to bind method 
// new walk function is always attached to person object