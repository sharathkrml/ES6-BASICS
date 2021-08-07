//person is an object = key value pairs
//function inside object is called method
//walk is a method in person object
const person = {
  name:'Sharath',
  walk:function(){},
  talk(){console.log(this.name)}//es6 syntax for method 
};
//2 ways to access members

//bracket notation  --if we are unsure about object members
const targetMember='names';
person[targetMember] = 'Sharath 💯';
//dot notation
person.talk();