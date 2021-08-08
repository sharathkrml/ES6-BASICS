class Person{
  //special method called constructor
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  walk(){
    console.log('walk');
  }
}
//whenever he have constructor in child class,we need to call constructor of parent class
class Teacher extends Person{
  constructor(name,age,degree){
    super(name,age);
    this.degree=degree;
  }
  teach(){
    console.log('teach');
  }
}
const newteacher = new Teacher('teachername',55,'MTECH')
console.log(newteacher)
newteacher.teach()
newteacher.walk()