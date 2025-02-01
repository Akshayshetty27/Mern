// // console.log(" this is promise");

// // let p= new Promise( (resolve , reject )=>{
// //     let b= Math.random();
// //     if( b < 0.5)
// //     {
// //         reject("No random was greater than 0.5");;
// //     }
// //     setTimeout(()=>{
// //         console.log("i am done ");
// //         resolve("harry")
// //     },3000);


// // })

// // p.then((a)=>{
// // console.log(a)
// // }).catch((err)=>{
// //     console.log(err);
// // })

 



// let p2= new Promise((res,rej)=>{
// let n=Math.ceil(Math.random()*10);
// if( n > 5)
// {
//     rej("the number is too big ");
//     console.log(n);
// }     
// setTimeout(()=>{
//     res("akshay");
//     console.log(" this promise 2");
// },2000)
// });

// p2.then((a)=>{
//     console.log(a);
//     return new Promise((res,rej)=>{
//         console.log(" this is promise chaining ");
//         let aa=5;
//         if(aa<5)
//         {
//         rej("rejected");
//         }else{
//             res("promise chained successfully ");
//         }
//     })

// }).catch((err)=>{
//     console.log(err);
// })






let prom2= new Promise((re , rej)=>{
 let n = Math.ceil( Math.random() * 10);
 if( n > 4)
 {
    rej(" the number is too big ");
    console.log(n);
 }else{
    re(" the number is fine to work with ");
    console.log(n);
 }
}
)
 prom2.then((a)=>{
    console.log(a);
    


 }).catch((err)=>{
    console.log(err);
 });


