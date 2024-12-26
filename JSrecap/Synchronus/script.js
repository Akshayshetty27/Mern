// Synchronus -  executes line by line code   in a sequential manner  code  that waits  for an operation  to complete 

// Asynchronus :  allows multiple code to be excuted in parllel 

function fun1(callback)
{
    setTimeout(() => {
        let a=5;
        a= a+ 4;

        console.log("hello",a);
        callback();
    }, 2000);
}

function fun2()
{
setTimeout(()=>{
    console.log( "hello 1");
},1000);

}
fun1(fun2);



// error handleing 
// try  {}  catch {}

try{
console.log(x);
}catch(error){
    console.error(error);
}finally{
    console.log(" this always  executes  in a errpr handling ");
}

console.log(" you learned to handle a  error in js ");


// throw an error 
function f(){
    setTimeout(()=>{
try {

    num= window.prompt(" enter number 1");
    num2=window.prompt(" enter number 2"); 

    if( num == 0 )
    {
        throw new error();
    }
    console.log(num+num2);0
}catch(error)
{
    console.log(" you cannot input a number zero4");

}

console.log( " end of the work ");
},5000);
}

f();
