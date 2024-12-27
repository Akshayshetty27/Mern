

// addEventListener ->   listen for specific events to create  interactive pages events  ,  click , mouseover , mouseout 

// addEventListener(event, callback   or )



const clickbuttton=document.getElementById("click");
const mybox= document.getElementById("box");

 

// mybox.addEventListener("click",(event)=>{
//     // console.log(event);
//     event.target.style.backgroundColor="red";
//     event.target.textContent="you have clicked";
// });


clickbuttton.addEventListener("click",event=>{
    console.log(event);
    mybox.style.backgroundColor="yellow";
    mybox.textContent="dont do it ";
});

clickbuttton.addEventListener("mouseout",()=>{
    console.log(event);
    mybox.style.backgroundColor="yellowgreen";
    mybox.textContent="Click Me";
});




/// key events    

