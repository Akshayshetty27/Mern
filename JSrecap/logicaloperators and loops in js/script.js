// logicl operators
//AND-> &&
// OR->||
//NOT->!

let age=134;
if( age>0 && age<18)
{
    console.log(" you are Minor");

}else if( age >18 && age<100){
   
    console.log("you are not minor you can vote ");
}else{
    console.log( " may be you are not human ")
}
 
issunny=false;
israin=false;
if(!issunny && israin)
{
    console.log(" it is raining");
}else if(issunny)
        {
            console.log("it is sunny day ");
        }else if( !issunny && !israin)
        {
            console.log("it is Winter ");
        }


// Strict equality in Java script 
let b=3.12;
const a='3.12';
if( a===b)
{
    console.log(" value and data type of  a and b are equal ");
}else if( a!==b && a==b)
{
    console.log(" value a and b are equal but not datatype");
}else{
    console.log(" value and data type of  a and b are not equal ");
}