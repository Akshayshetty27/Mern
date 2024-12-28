const mybtn=document.getElementById("btn");
const image=document.getElementById("myimage");

mybtn.addEventListener("click",(event)=>{
    if(image.style.visibility === "hidden")
    {
        image.style.visibility="visible";
        mybtn.textContent="hide me";


    }else{
            image.style.visibility="hidden";
            mybtn.textContent="show";
        }
});



//// nmodelist in js 
  // staic collection  of HTML  elemnt by (id , class , element )
  // can be  created by using  queryselctor 
  // Similar  to an array  but no (MAP, FILTER , REDUCE )
  // NOdeList  wont update  to automatically reflect changes 

//using
  let mylists=document.querySelectorAll(".mybtns");

  console.log(mylists.length);

  mylists.forEach(button =>
{
   button.addEventListener("mouseover",(event)=>
{

        event.target.style.backgroundColor= " hsl(212, 73%, 40%)";
});
});

mylists.forEach(button =>
    {
       button.addEventListener("mouseout",(event)=>
    {
    
            event.target.style.backgroundColor= " hsl(212, 73%, 60%)";
    });
    });


    const newbtn=document.createElement("button");
    newbtn.textContent="click 5";
    newbtn.classList="mybtns";
    newbtn.addEventListener("click",()=>
        {
        newbtn.style.backgroundColor= " hsl(212, 73%, 40%)";
        });
    newbtn.addEventListener("mouseout",()=>
     {
    newbtn.style.backgroundColor= " hsl(212, 73%, 60%)";
     });
    // document.body.appendChild(newbtn);


// removing  
    mylists=document.querySelectorAll(".mybtns");
    console.log(mylists.length);

    mylists.forEach(button =>{
        button.addEventListener("click",(event)=>
        {

            event.target.remove();
            mylists=document.querySelectorAll(".mybtns");
            console.log(mylists);
            console.log(mylists.length);

        })
    });













    // classList->

    // Element properties in JS used to interact with an elemnt  list of classes  
    // allows tou ti make  reusable classes for many elements across your weboage
    // add();
    // remove();
    // toogle ();
    // replace();
    // contains();



            
    const btn1=document.getElementById("mybtn");
    btn1.classList.add("enabled");
   

    btn1.addEventListener("mouseover",(event)=>
    {
event.target.classList.add("hover");
    });

    
    btn1.addEventListener("mouseout",(event)=>
        {
    event.target.classList.replace("hover","enabled");
        })