//we are transforming array of colors ,for each color we are returning a string
//coloritems is an array of generated strings
const colors=['red','green','blue'];
const coloritems=colors.map(function(item){
  return '<li>'+item+'</li>'
});
console.log(coloritems)

const coloritems2=colors.map(item=>'<p>'+item+'</p>');
console.log(coloritems2)
//template literals in es6

const coloritems3=colors.map(item=>`<li>${item}</li>`);
console.log(coloritems3)
