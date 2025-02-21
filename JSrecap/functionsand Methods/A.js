console.log("Hello")
console.log("abc".toUpperCase())

let name=""
function welcome(name,n)
{
    for(i=0;i<n;i++)
    {
    console.log(" Hello",name," welcome to the place")
    }
}

function vowels(name){
let count=0
for(i in name)
    if(name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] =='o'||name[i] =='u')
     {
        count++
     }
console.log("the nu,ber of vowels",count)
}

vowels("akshay")
vowels("helloo")
welcome("akshay",5);
welcome("shetty",3);

let result= sum=(a,b)=>
{
    return a+b
}



result=(3,3);
console.log(result);







arr=["abc","def","ghi","djs"];
arr.forEach(value => {
    console.log(value.toUpperCase())
    
});

let num=[2,3,4,5,6,8,9]
 newnum=num.map((val)=>
{
return val*val
})

newnum.forEach(val=>
{
    console.log(" "+val);
}
)