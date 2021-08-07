const square =function(number){
  return number*number;
}
console.log(square(5));

const newsquare = (no) =>{
  console.log(no*no);
}
newsquare(6)
//if single parameter
const singlequare = no =>{
  console.log(no*no);
}
singlequare(4)

//if no parameter

const noparam = () =>{
  console.log('no parameter');
}
noparam();

//if more parameter
const multiparam =(a,b,c)=>{
  console.log("a="+a);
  console.log("b="+b);
  console.log("c="+c);
}
multiparam(1,2,4)

//if body of function include a single line only
const singleLinefunction=number=>console.log(number*number)

singleLinefunction(9)

//or 
const singleLinefunction2=number=>number*number//no return needed

console.log(singleLinefunction2(100))


//where arrow function is useful
const jobs=[
  {id:1,isActive:true},
  {id:2,isActive:true},
  {id:3,isActive:false}
];

//get only active jobs
//when we call filtermethod,this method iterates over array,and pass it to function(job)
const activeJobs=jobs.filter(function(job){return job.isActive});
//filter jobs where job.isActive
const activeJobs2=jobs.filter(job=>job.isActive);
console.log(activeJobs);
console.log(activeJobs2);