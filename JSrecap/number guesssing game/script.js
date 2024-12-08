
function generatekey()
{
max=10;
min=1;
comp=Math.floor(Math.random(1,20)*max +min);
compinput=document.getElementById("box1");
}

document.getElementById("submit").onclick=()=>
{

    generatekey()
    userinput=window.prompt(" enter user input ");
    compinput.textContent=comp;
    document.getElementById("box2").textContent=userinput;

    if(userinput == comp)
    {
        document.getElementById("result").textContent="you win";
    }
    else{
        document.getElementById("result").textContent="you loose";
    }
    
}