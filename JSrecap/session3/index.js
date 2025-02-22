// function sayHello()
// {
//     console.log("h");
//     console.log("e");
//     console.log("l");
//     console.log("l");
//     console.log("o");

// }


// sayHello();


function add( n1, n2)
{
    let sum = n1 + n2;
    return sum;
}

const res=add(3,4);
console.log(res);


function welcome(username)
{
    if( username === undefined)
    {
        console.log( " please enter a valid name ");
    }
return  `hello ${username}  welcome to website `;
}

let re= welcome("akshay");
console.log(re);



//  functions  and objjects and array in JS 



function calculatecartPrice(...num1)
{
    let sum=0;
    for( i in num1)
        sum += Number(num1[i]);
return Number(sum);
}


let r= calculatecartPrice(3,4,5,6);
console.log(typeof(r)+" the sum of number "+r);

// passing objecct in   function

const user = {
    username:"akshay",
    pass : "39w",
}


function handleobj(obj)
{
    let key= Object.keys(obj);
    let val = Object.values(obj);
    for( i in key)
    {
        console.log(key[i]+" :"+val[i]);
    }

}

handleobj(user);



// global scope and local scoope 

let a=0; // block scope 
const b= 10; // block scope 
var c=3; // global scope


// mini hoisting 

function one()
{
    const username1= "akshay";
    function two()
    {
        const website= " youtube";
        console.log(" user name "+username1);
        console.log(" website :"+website);
    }

    
    two();
}

one();


// this and  arrow function 
 a=(param)=>{
console.log(` hello ${param}`);
}


a("akshay");



const oa= {
    name   :"akshay",
    usn    :"4MT21IS004",
    place  :"Moodabidri",
    college:"MITE"

}

sendonject=(obj)=>{
    let arr=Object.keys(obj);
    for(i in arr)
        console.log( `${arr[i]} : ${obj[arr[i]]}`);
}

sendonject(oa);



/// imeadiately invoked  Function  Expression 
((user)=>
{
console.log(`hello ${user}`)

})("user" );

(()=>
    {
    console.log("databse connected ")
})();

