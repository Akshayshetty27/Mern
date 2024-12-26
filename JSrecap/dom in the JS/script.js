
username="hello";
let v=document.getElementById("con");
v.textContent ===""?"guest": v.textContent +=username;



/// types of element selctor in JS 

// 1) document.getElementById("");  // element or Null
// 2) document.getElementsByClassName(""); // html collection
// 3) document.getElementsByTagName("");html collection
// 4) docuement.querySelector(""); element or Null  select the first  element which matches 
// 5) document.querySelectorAll(""); NOde list 


v=document.getElementById("tag");
v.style.backgroundColor="red";
v.style.textAlign="center";



const fruits=document.getElementsByClassName("fruits");
 console.log(fruits[0].textContent);
//  fruits[0].style.color="red"
//  fruits[1].style.color="orange"
// fruits[2].style.color="yellowgreen"

colors=["red","yellowgreen","orange"];

for( i=0 ;i<3;i++)
{
    console.log(Math.floor(Math.random(0,3)*3 ))
    fruits[i].style.color=colors[ Math.floor(Math.random(0,3)*3 )];
}



const elemt=document.getElementsByTagName("li");

console.log(elemt);
 for(i=0; i<3;i++)
 {
    elemt[i].style.backgroundColor="yellow";

   console.log(elemt[i].textContent);
 }

  

  const q= document.querySelectorAll(".fruits");

  q[0].style.backgroundColor="green"; 
  
  q[2].style.backgroundColor="green";
    q[1].style.backgroundColor="green";




    const q2= document.querySelectorAll("ul");

 q2[0].style.color="green"; 
  
  q2[2].style.color="green";
    q2[1].style.color="green";