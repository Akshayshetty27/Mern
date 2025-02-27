Math.PI = 4.0;
console.log((Math.PI).toFixed(3));


console.log(Object.getOwnPropertyDescriptor(Math , "PI"));


const chai = { 
    name:"chai" ,
    price : 230
}
console.log(chai.price);
console.log(chai.name);


Object.defineProperty( chai , 'name' ,{ writable:false , enumerable:false });
chai.name="Tea";
chai.price=234;


console.log(chai.price);
console.log(chai.name);



