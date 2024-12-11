hello(leave);

function hello(cal)
{
    console.log("hello");
    cal();
}

function leave()
{
    console.log("leave!");
}
function goobye()
{
    console.log("good bye!");

}


// example 2


function sum(callback ,x,y)
{
    let result=x+y;
    callback(result);
}
function callback(str)
{
console.log(str);
}
sum(callback,4,5);

/// for each  in JS

console.log("for Each in JS");
arr=[4,5,6,7,8,9,10];
console.log("double of the array element ")
arr.forEach(element => {
   console.log(2*element); 
});

console.log("triple of the array element ")
arr.forEach(element => {
    console.log(3*element); 
 });

 console.log("Square of the array element ")

arr.forEach(element => {
    console.log(element*element); 
 });


 let fruits=["apple","orange","mango"];

 fruits.forEach(e=>
 {
console.log(e.toUpperCase());
console.log(e.toLowerCase(),"\n");
console.log(Capitlize(e));

 }
)


function Capitlize(str)
{
return str[0].toUpperCase()+ str.slice(1);

}