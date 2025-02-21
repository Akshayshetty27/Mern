let boxes=document.querySelectorAll(".box");



// for(i=0;i<boxes.length;i++)
// {
//     if(i%2 == 0)
//     {
//         boxes[i].style.backgroundColor="red";
//     }
//     else{
        
//         boxes[i].style.backgroundColor="yellowgreen";
//     }
// }
let colors=["yellow", "orange","red","purple","peach","grey"];
boxes.forEach((e)=>
{
    let num= Math.floor(Math.random()*10 %5);
    console.log(num);
            e.style.backgroundColor=colors[num];

})


// inserting and deleting an element  dynamically

// document.body
// .querySelector(".box").removeAttribute("style");


let div= document.createElement("div");
div.style.color="red";
div.innerHTML="HI this is akshay";
div.setAttribute("class","created");

// document.querySelector(".con").prepend(div);

document.querySelector(".box").replaceWith(div);