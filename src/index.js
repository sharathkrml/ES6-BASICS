//this returns reference to the current object
const person = {
  name:'Sharath',
  walk(){
    console.log(this);
  }
};
//if this is called as menthod in an object,this references the the object
person.walk()
//if called funstion outside object,this references window object
const walk = person.walk;
walk()