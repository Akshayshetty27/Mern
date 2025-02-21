let a=prompt("enter the number ")
let b=prompt(" enter the opration")
let c=prompt(" enter the second number")
let random=Math.random();
const obj={
    "+":"/",
    "-": "*",
    "*":"+",
    "/":"-"
}

console.log(random);
if(random > .4)
{
console.log(`the result is : ${eval(`${a}  ${b} ${c}`)}`)
let res= Number(a) ;
window.alert(Number(res));
}else{
    b=obj[b];
    console.log( `the result is : ${eval(`${a}  ${b} ${c}`)}` );
    let res= `${a}  ${b} ${c}`;
    window.alert(res);
}