function hello()
{
    console.log("hello");

}
hello();



// function expression = a way to definr function as  values  or a variable 

const hello1= function(i)
{
    console.log("hello from expression ",i);
}
hello1(7000);

for( i =0; i< 100;i=i+2)
{
setTimeout(hello1(i+1),1000);
}



const num=[3,4,5,8];

function square(i)
    {
     return Math.pow(i,2);
    
    }


const squares=num.map(square);
console.log(squares);


const cube=num.map(function(e){
return Math.pow(e,3);
})

console.log(cube);

const evennum= cube.filter(function (e){
    return e%2===0;
})

console.log(evennum);

const oddnum= cube.filter(function (e){
    return e%2!==0;
});

console.log(oddnum);


// arrow function in JS 

const hello0=(e)=>{
    console.log(`"hello my name "${e}`)
    console.log("hello ",e,"from arrow function ");
}
hello0("akshay");

squarea=num.map((i)=>{
    return Math.pow(i,2);
})

console.log(squarea);
evenaa=squarea.filter((e)=>{
return e%2 ===0;
})

console.log(evenaa);

total=squarea.reduce((a,e)=>{
    return a+=e;
})

console.log(total);




// objects in JS  

// object - is a collection of related properties and /or methods
// / can represent  real world  things such as  (people , place etc )
// object =(key , value ) pair 

person1={
    name:"akshay",
    age:21,
    isemployed:true,
    sayhello :(n)=>{
        console.log("hello from ",n);
    },
}
person2={
    name:"shetty",
    age:23,
    isemployed:true,
    sayhello :(n)=>{
        console.log("hello from ",n);
    },
}

console.log(person1.name);
console.log(person1.age);
console.log(person1.isemployed);
console.log(person1.sayhello(person1.name));



console.log(person2.name);
console.log(person2.age);
console.log(person2.isemployed);
console.log(person2.sayhello(person2.name));