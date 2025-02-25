

// let promise1 = new Promise((res,rej)=>{
//     let num = Math.round(Math.random()*10);
//     if(num >5)
//     {
//         setTimeout(() => {
//             console.log(num);
//             res();
//         }, 1000);
       
//     }else{
//         rej();
//     }
// });

// promise1.then(()=>{

// console.log("Promise consumed");
// }
// ).catch(()=>{
//     console.log(" error found ");
// }).finally(()=>{
//     console.log(" promise 1 completed ");
// })



const p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        w=true;
        if(!w)
        {
        console.log(" promise 2 compiled ");
        res({ username:"chai" , email: " chaioremeail.com"});

        }else{
            rej("error found ");
        }        
    },1000)
})
.then(( name )=>{
    console.log(name);
    return name.username;
    // console.log(email)
})
.then((n)=>{
console.log(n);
})
.catch((messge)=>{
    console.log(messge);
}).finally( ()=>{
    console.log(" the promise  2  completed")})



let promise3 = new Promise((res,rej)=>{

    setTimeout(()=>{
        let e= true;
        if(!e)
        {
            console.log( "entered resolve block");
            res( {name : "akshay" , pass :"12323"});
        }
        else{
            rej("rejected ");
        }
    },1000);

})

async function consumepromise(){
    try{
        const res= await promise3;
        console.log(res); 
        console.log(res.name);
    }catch(error){
        console.log("error"+error);
    }
 
}
consumepromise();



// async function getallusers() {
//     try{
//    const response= await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//    const data =await response.json();

//    console.log(data);
//     }catch(e){
//         console.log(" mes" +e);
//     }

    
// }

// getallusers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return   response.json()
})
.then((e)=>{
    // arr = e[0]
console.log(e);
})
.catch(()=>{
    console.log(" error");
})