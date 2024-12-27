




const box= document.getElementById("box");
const movement=10;
let x=0;
let y=0;


document.addEventListener("keydown",(event)=>
    {

        box.textContent="Ouch!!"
        box.style.backgroundColor="lightblue";
    }
);


document.addEventListener("keyup",(event)=>
    {

        box.textContent="Hello";
        box.style.backgroundColor="yellowgreen";
    }
);

document.addEventListener("keydown",(event)=>
    {
     console.log(event);
      if(event.key.startsWith("Arrow")){
            event.preventDefault();
            switch(event.key)
            {
                case "ArrowUp":
                    y-=movement;
                    break;
                case "ArrowDown":
                    y+=movement;
                    break;
                case "ArrowRight":
                    x+=movement
                    break;
                case "ArrowLeft":
                        x-=movement
                        break;
            }
            box.style.top= `${y}px`;
            box.style.left= `${x}px`;

        }
    });
    

    
  
        