document.getElementById("bg").addEventListener("mouseover",()=>{
    document.body.style.backgroundColor="green";
    document.getElementById("bg").style.backgroundColor="yellow";
})

document.getElementById("bg").addEventListener("mouseout",()=>{
    document.body.style.backgroundColor="white";
    document.getElementById("bg").style.backgroundColor="cyan";
    // let obj = document.createElement("p");
    // obj.textContent = "Hello, this is a new paragraph!";
    // document.body.appendChild(obj); 
    
});

//queryselector 
let clasobj = document.getElementsByClassName(".a");
let h2arr= document.querySelectorAll("h2");

h2arr.forEach((e)=>
{
e.style.backgroundColor="orange";' '
})


let myul= document.querySelector("ul");

let liarr=myul.querySelectorAll('li');
liarr[1].style.backgroundColor="green";
liarr[2].innerText +=" first";
liarr[0].style.fontSize="32px";

// style.backgroundColor="green";
// myul.querySelector('li').innerText +=" first";
// myul.querySelector('li').style.fontSize="32px";


let parent= document.querySelector(".week");
// console.log(parent.children[1].innerText);

for( let i=0; i<parent.children.length;i++)
{
    if(i %2== 0)
    {
        parent.children[i].style.backgroundColor="cyan";
    }else{
        parent.children[i].style.backgroundColor="plum";

    }
    console.log(parent.children[i].innerHTML)
}


console.log("\n\n "+parent.firstElementChild.innerText);
console.log(parent.lastElementChild.innerText);
console.log( parent.childNodes);



// crating element 


const div= document.createElement('h1')

console.log(div);
div.className="main";
div.id= Math.ceil(Math.random());
div.innerHTML="<h1>'hello'</h1>"

document.body.appendChild(div);


document.getElementById("submit").addEventListener("click",()=>
{
    document.removeChild(parent);
})


let liele=document.createElement('li');
liele.innerText="friday";

document.getElementsByClassName("week").appendChild(liele);