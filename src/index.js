// var -> Scope == Function
// let -> Scope == Block in which its defined
// const -> Scope == Block in which its defined
function sayHello(){
  for (let i=0;i<5;i++){
    console.log(i);
  }
  console.log(i) //if var,i=5  if let,i not defined
}
sayHello();