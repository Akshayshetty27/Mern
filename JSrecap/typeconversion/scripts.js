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