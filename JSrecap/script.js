console.log(" hello")
// window.alert("this is an alert")
// window.alert("another LERT")

document.getElementById("one").innerHTML="hello";
// document.getElementById("par").innerHTML="this is a pargraph added from the js"


// variables 
// declaration 
// and assignment

let x= 100;
console.log(' you are age ',x);
let name="akshay";
console.log(typeof(name))
console.log(' you are age ',name);

let fullname="Akshay A Shetty";
let age=21;
let isStudent=true;
let ar=document.getElementById("par");
document.getElementById("two").innerHTML+=age;
document.getElementById("three").innerHTML+=isStudent;



// Arithemetic  operation
let no=34;
console.log(no);
no++;
console.log(++no);

console.log(no+3);
no--;
console.log(no);
console.log(--no);
//  operator precedence 
result=8%2+4+445/35;
console.log(result);

// user input 
// 1) window propmt
// 2)  html textbox

let username;
// username=window.prompt(" enter user name")
console.log(username);



btn= document.getElementById("sub");
btn.onclick=()=>
{
    username=document.getElementById("inp").value;
    console.log(username);
    ar.textContent+=username;
}