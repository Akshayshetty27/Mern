// let age=window.prompt(" what is your age");
// age++;
age="23";
console.log(Number(age),typeof(age));
let co="nr";

console.log(co,typeof(co));


// constants in java 
// it is the value which stays same or changed statically
const pi= 3.14159;
let rad=Math.floor(Math.random(0,1)*10);
console.log(rad);
let area= pi*rad*rad;
 console.log(" area of the circle of radius: ",rad," :",area);


 let click=document.getElementById("btn");
 click.onclick=()=>{
    let r=document.getElementById("in").value;
    const ar= 3.142*r*r;
    document.getElementById("area").textContent += ar;
 }


 // click count program
let val=0;
 document.getElementById("count").onclick=()=>{
val=val+1;
document.getElementById("incre").textContent=val;
 }
  document.getElementById("coun").onclick=()=>{
val=val-1;
document.getElementById("incre").textContent=val;
 }

 document.getElementById("reset").onclick=()=>{
   val=0;
   document.getElementById("incre").textContent=val;
    }

let z=3.4532;
console.log(Math.round(z));
console.log(Math.floor(z));
console.log(Math.ceil(z));
console.log(Math.trunc(z));
console.log(Math.pow(3,3));
console.log(Math.sqrt(4));
console.log(Math.log(2));
console.log(Math.tanh(45));
console.log(Math.max(4,5));
console.log(Math.min(4,5));


//   Random number generator

let num1= Math.ceil(Math.random(1,100)*10);
console.log(num1);
let num2=Math.floor(Math.random(1,6)*10);
let num3=Math.floor(Math.random(1,6)*10);


document.getElementById("Roll").onclick=()=>
{
document.getElementById("die1").textContent=num1;
document.getElementById("die2").textContent=num2;
document.getElementById("die3").textContent=num3;
}