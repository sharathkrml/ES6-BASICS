const first = [1,2,3]
const second = [4,5,6]

//concatenate 2 arrays
const combined = first.concat(second)
console.log(combined)
//using spread operator
// ...first gets all items from first array
const newcombined = [...first,...second,...combined]
console.log(newcombined)
// spread is useful eg:- we can add element in between

const l = [...first,'a',...second]
console.log(l)
//if old way
const a = first.concat('a')
const b = a.concat(second)
console.log(b)
//clone array
const clone = [...first]
console.log(first)
console.log(clone)
//we can also apply spread operator on objects
const fobject = {name:'sharath'};
const sobject = {age:21};
const cobject = {...fobject,...sobject,place:'kerala'};
console.log(cobject);