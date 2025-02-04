let a =prompt(" enter first number ");
let b = prompt(" enter second number ");
try {
    if( isNaN(a) || isNaN(b))
        {
            throw SyntaxError(" sorry the type of the number has to be  number ");
        }
} catch (error) {
    console.log(" error ");   
}


let sum = parseInt(a) + parseInt(b);
console.log( sum);


