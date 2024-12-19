// map method 
//   accept a callback and applies that function 
// to each of the element of an array , then a new array 


const numbers=[1,2,3,4,5,];
const squae=numbers.map(square);
const cu=numbers.map(cube);
function square(e)
{
    return e*e;
}
function cube(e)
{
    return e*e*e;
}
console.log(squae);
console.log(cu);


const student=["akshay", "petrick","sammera"];

function convert(e)
{
    return e.toUpperCase();
}
const upp=student.map(convert);
console.log(upp);


// examaple 3 
const date=["4-3-2024","5-6-2023"];
const diff=date.map(conveeert);
function conveeert(e)
{
    const parts=e.split("-");
    return `${parts[2]} - ${parts[1]} - ${parts[0]}`;
}

console.log(diff);


// filter method in javascript 
// creates an array with filtering out elements 

let numbes=[1,2,3,4,5,6,7,8,];
evennum=numbes.filter(even);
function even(e)
{
 return e%2 === 0;
}
console.log(evennum);
oddnum=numbes.filter(odd);
function odd(e)
{
    return e%2 ===1;
}

console.log(oddnum);


const ages=[23,12,34,16,56,78];
const senior=ages.filter(issenior);
const junior=ages.filter(nosenior);
function issenior(e)
{
    return e>18;
}
console.log(senior);
function nosenior(e)
{
    return e<18;
}
console.log(junior);



// reduce method in javascript 
// it reduce the element of the array to a single value that returns the callback value 

const prices=[5,4,30,10,25,20];

