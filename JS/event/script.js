
// btn.textContent=" the content is changed ";
let btn= document.getElementById("btn");
let num=0;
btn.addEventListener("click",()=>{
    if(num %2 ==0){
    // alert(" the button clicked ");
    let box=document.querySelector(".box");
    box.innerHTML="the content is changed ";
    num++;
}else{
    let box=document.querySelector(".box");
    box.innerHTML="change content";
    num++;
}

});

document.addEventListener("keydown",(e)=>{
    console.log(e);
    // alert("you have right clicked ")


});
