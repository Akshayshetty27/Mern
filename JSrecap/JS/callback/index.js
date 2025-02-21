console.log("hi ,akshay");
setTimeout(()=>
{
    console.log("hello");
},2000);
setTimeout(()=>
    {
        console.log("hello this is my secomd interval ");
    },200);

console.log("Dostoo ");

const callback=(name,callback)=>{
    console.log(name);
}

const loadScript =(src, callback)=>{
   let sc= document.createElement("script");
    sc.src=src;
    sc.onload=callback("harry");
    document.head.append(sc);
}

loadScript(" https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js ",callback);


// call back hell
const f2=(nm,callback)=>{
    console.log(nm);
}



f2("akshay shetty",(name)=>{
    console.log("inside a f2 ",name);
})



/// Promises 

