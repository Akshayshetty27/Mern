
function createcard(title , cname , views , month, duration , thumbnail){
    let viewnumber;
    if(views < 1000)
        {
       viewnumber= views;
        }else if(views < 1000000)
     {
    viewnumber= views/1000 +"k" ;
     }else if(views > 1000000){
        viewnumber= views /1000000 + "M";
     }else{
        viewnumber= views;
     }
    let html=`<div class="card">
        <div class="img">
          <img src=${thumbnail} />
          <div class="capsule">${duration}</div>
        </div>
        <div class="text">
          <h1>${title} </h1>
          <p>${cname}. ${viewnumber} .${month}>
        </div>
      </div>`
      ;

      document.querySelector(".con").innerHTML+=html;
}

createcard(" this is about creating card" , "code with me" , 7840054 , "3 months ago ", "45:00 m" , "C:\Users\shett\OneDrive\Desktop\java dsa\mern\Mern\JS\card" );

createcard(" this is about creating card" , "code with me" , 7844 , "3 months ago ", "45:00 m" , "C:\Users\shett\OneDrive\Desktop\java dsa\mern\Mern\JS\card" );


