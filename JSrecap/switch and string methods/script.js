min=1;
max=7;

day=Math.ceil( Math.random(1,6)*max+min);
let h2con=document.getElementById("greet");
console.log(day);

switch(day)
{
    case 1: 
    h2con.textContent="hello happy monday";
    break;
    case 2:
        h2con.textContent="hello happy tuesday continue your work";
        break;
    case 3:
        h2con.textContent="hello happy wednesday  continue your work";
        break;
    case 4:
        h2con.textContent="hello happy tuesday continue your work";
        break;
    case 5:
        h2con.textContent="hello happy friday complete  your work by today ";
        break;
    case 6:
        h2con.textContent="hello happy weekend";
        break;
    case 7:
        h2con.textContent="enjoy your sunday ";
        break;
    default :
    h2con.textContent=" it is not a valid day";
    break;  
}

let str="akshay";
console.log(str.charAt(0));
console.log(str.substring(0,3));
console.log(  str.substring(4,6));
let len=str.toUpperCase();
console.log(len);
console.log(str.length);
let vr=str.replaceAll('a','A');
console.log(vr);
let result= str.startsWith('a');
if(result)
{
    console.log(" it starts with a");
}else{
    console.log(" it is not starts with a");
}
let result1= str.endsWith('a');
if(result1)
{
    console.log(" it end with a");
}else{
    console.log(" it is not ends with a");
}

let sr=str.padStart(20,'-');
console.log(sr);
let sr1=str.padEnd(20,'-');
console.log(sr1);

// method over chaining
let username=window.prompt("enter user name");
console.log(username);
username=username.trim().charAt(0).toUpperCase()+username.substring(1,username.length).toLocaleLowerCase();
console.log(username);
