const languages= ["js" , "java" ,"python" , "Ruby" , "Go","Rust"];

const values =languages.forEach((e)=>
{
 console.log(e);
});



const num=[1,4,3,5,6,7,2,8,9];

const n=num.filter((e)=>{
    if( e % 2 == 0)
    {
        return e;    }

});

console.log(n);


const books=[
    {
        title: "book1" , author:"ABS" , published:1982 ,edition:"1999"
    },
    {
        title: "book2" , author:"ASB" , published:1980 ,edition:"1990"
    },
    {
        title: "book3" , author:"BASSA" , published:2003 ,edition:"2023"
    }

]


const userbooks= books.filter((e)=>
{
   if( e.published > 1980)
       return `the auther :${e.author} of ${e.title}`
});

console.log(userbooks);


// map method 

let numsss= num.map((e)=>
{
    return e+3;
}).map((e)=>{
    return e-3;
}).filter((e)=>{
    if( e >2)
    { 
        return e;    }
});
console.log(num);

console.log(numsss)


// reduce 

const nu = numsss.reduce((a,e)=>
{
   return a+e;
},0)

console.log(nu);

let coursearr=[
    {
     name:"JS",
     price:4999
    },
    {
        name:"java",
        price:12999
    },
    {
        name:"python",
        price:9999
    }
]

let total= coursearr.reduce((acc , item)=>
{
    return acc + item.price;
},0)

console.log(total);