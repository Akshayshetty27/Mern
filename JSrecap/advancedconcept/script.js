// async function sleep() {

//     return new Promise((res , rej)=>{
//         setTimeout(()=>
//         {
//             res(45);
//         },1000);
    

//     });
// }

// (async function main()
// {
//     let a = await sleep();
//     console.log(a);

//     let b = await sleep();
//     console.log(b);

//     let [x, y, ...arr]= [4,5,7,5,3];
//     console.log(x,"  ",y);
//     console.log(arr);


// })();


// spread  operator 
async function sum(a, b, c) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(a + b + c);
        }, 1000);
    });
}

const arr = [3, 4, 5];

async function main() {
    console.log(await sum(arr[0], arr[1], arr[2]));
    console.log(await sum(...arr));
}

main();


// hoistiing 

