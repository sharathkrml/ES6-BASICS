const address={
  street:'streetname',
  city:'cityname',
  country:'countryname'
};
// we need to extract values of properties and store in separete variables
//typically we do
const street1 = address.street
const city1 = address.city
const country1 = address.country
// we have reptitive address. code
// destructuring solves the problem
//const {street,city,country}=address
// maybe we are only interested on street,then
const {street} = address
// if we want to use alias(street as st)
const {street:st} =address
console.log(street1,city1,country1)
console.log(street)
console.log(st)