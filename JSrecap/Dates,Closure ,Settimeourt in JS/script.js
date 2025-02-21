// dates in Js  
// there are get methods  
// such as 
//  getHour ,getMinutes , getFullYear   etcc...
//  there are set method 


const date= new Date();
console.log(date);
const year= date.getFullYear();
const month=date.getMonth();
const hour= date.getHours();
const min=date.getMinutes();
const daya= date.getUTCDate();
console.log(daya);
console.log(min);
console.log(hour);
console.log(month+1);
console.log(year);

let d= date.setDate(21);
console.log(d);


// closure in js 
// a function defined inside a another function in which  inner function has access to the variables and scope of the outer function 



function outer()
{
    messge="Hello";
    function inner(name)
    {
        console.log(`${messge}  ${name}`);
    }
    inner("Akshay");
}

outer();

// example 2
function CreateCounter(){
   let  count =0; 
function increement()
{
     count ++;
    console.log(" "+count);
}
return {increement};
}
const c=CreateCounter();

c.increement();
c.increement();





//   exaple  3 
function CreateGmae(){
    
 let score =0;

 function increment(point)
 {
     score += point ;
     console.log(score);

 }

 function  decrement(point)
 {
    score -= point;
    console.log(score);

 }

 function getscore()
 {
    return score;
 }

 return {increment,decrement,getscore};
}
const game= CreateGmae();
game.increment(5);
game.decrement(2);
game.increment(4);
let  s=game.getscore();
console.log(" score scored at last ",s);





/// setTimout( callback , timedelay required ) in js 
// function  sayhello()
// {
//     window.alert(" hello ");

// }
// setTimeout(sayhello,500);

// const tim=setTimeout(()=>{
//     console.log(" hello");
// document.getElementById("con").innerHTML += "<h1> Akshay </h1>";
// },2000);


// clearTimeout(tim);

function starttimer()
{
    timoutid =  setTimeout(()=>{window.alert("hello");    },1000);
    console.log(" started ");
}

function cleartimer(){
clearTimeout(timoutid);
console.log(" cleared ");
}



// Time() in JS

function loaddata(){
console.time("test-data ");
for( i=0; i< 1000; i++)
{
    // console.log(" heello",i);
}

console.timeEnd(" load data end");
}
loaddata();