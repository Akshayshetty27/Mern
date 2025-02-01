// async function getdata()
// {
//     // simulate getting data 
//   return new Promise((resolve , reject)=>{

//     setTimeout(()=>
//     {
//         console.log( "fetching dataa");
//         resolve(455);
//     },3500)
//   })   
// }

async function getdata()
{
    // simulate getting data 
 
    let x= await  fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(x);
    let data= await x.text()
    // let data1= await x.json()
    return (data);
//   .then(response => response.json())
//   .then(json => console.log(json))

}
async function main(){
console.log( " loading  modules ");

console.log(" Do somthing  else ");

 console.log(" load data ");
 let data= await getdata();
     console.log( data);

     console.log( "task 1"); 
      console.log( "task 2");
    console.log( "task 3");
 

}
main().then(()=>{
    main2();
})

//  data.then(()=>{
//     console.log( data);

//     console.log( "task 2");
//  })




async  function get()
{

    setTimeout(()=>{
        return new Promise( (resolve, reject)=>{
            resolve("hi");

    },3000)

    } )
}

async function main2() {
console.log( "a");
console.log("b ");

let b= await get();
console.log( b);
}








async function getyourname() {
 
    setTimeout(()=>{
        let m= prompt(" enter your name");
        console.log( m.length); 
        return m;
    },2000)



}

async function name()
{
let name= await    getyourname();
console.log( " your name "+ name);
}

name();
