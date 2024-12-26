const h2heading=document.getElementsByTagName("h2");
// console.log(h2heading.length);
for( i=0; i<h2heading.length;i++)
h2heading[i].style.backgroundColor="yellow";
let e= document.getElementById("Fruits");
// console.log(e);
const firstchild=e.firstElementChild;
firstchild.style.backgroundColor="red";

// e.style.backgroundColor="green";



// let ulelement=document.querySelector("ul");
// console.log(ulelement.length);
// ulelement.forEach(e =>{
//     const first= e.firstElementChild;
//     first.style.backgroundColor="red";
//     first.style.color="yellow";

//     const last= e.lastElementChild;

//     last.style.backgroundColor="orange";
//     last.style.color="yellow";


// });


let  child1= document.getElementById("Fruits");
child1sib= child1.nextElementSibling;
child1sib.style.backgroundColor="green";



car=document.getElementById("cars");
console.log(car.length);
carfirstchild= car.firstElementChild;
carfirstchild.style.backgroundColor="green";


nextsibling=car.nextElementSibling;
nextsiblingfirstchild=nextsibling.firstElementChild;
nextsiblingfirstchild.style.backgroundColor="green"
