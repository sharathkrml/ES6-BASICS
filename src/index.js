const person={
  walk(){
    console.log('this',this)
  }
}
person.walk();//here this references to person

const person2={
  walk(){
    setTimeout(function(){
      console.log('this',this);
    },1000)
  }
}
person2.walk(); // here,this references to window object
//setTimeout is not part of any object,it is a standalone function

//fix1 old js
//how we can have a reference to person object inside callbackfunction
const person3={
 
  walk(){
    var self=this
    setTimeout(function(){
      console.log('self',self);
    },1000)
  }
}
person3.walk(); 
//fix2
//use arrow function
const person4={
 
  walk(){
    setTimeout(()=>{console.log('this',this);}
    ,1000)
  }
}
person4.walk(); 
//arrow function do not rebind this keyword