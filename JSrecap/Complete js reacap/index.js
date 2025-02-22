const num =100;

console.log( num);

const balance = new Number(2200);
console.log(balance.toString());
console.log( typeof(balance));



// dates in js 


let time = new Date();
console.log(" 1", time.toString())
console.log( time.toDateString())
console.log( time.toLocaleDateString())
console.log(time.toLocaleString());

console.log(typeof(time));
date = new Date();
console.log(date.toLocaleString());



// time in js 

let mytime = Date.now()
// console.log(mytime)
// console.log(date.getTime());
console.log(Date.now());

console.log(Math.floor(date.getTime()/1000));

console.log( date.getDay() +1 )
console.log( date.toDateString());
console.log( date.toLocaleDateString());

console.log( date.getMonth() +1);



// objects in   JS

// singleton   
   // object literals 

    const username = {
                        name : "akshay" ,
                        age : 21,
                        location : "Brahamavar",
                        greeting (){
                            console.log(`hello ${this.name}`);
                        }


                     } ;
        console.log( username["name"]);
        console.log(username.name)
        console.log( username["location"]);
        console.log( username["age"]);



        Object.freeze(username)

        
username.location= "Udupi";

                
console.log( username["location"]);
username.greeting();
                    


//  construco

const tinder = new Object();

tinder.id= "234";
tinder.name="akhssdf";

console.log(tinder["id"]);

const obj= {
    usernaem : {
        firstname : " AKSHAY ",
        middlename: "A",
        lasname: "Shetty"
    },
    islogged : false,
    email : "shettyakshay333@gmail.com",
}


console.log(obj.usernaem.firstname)

// combining  objects 

const obj1 ={ "a": 1 , "b":2};
const obj2 = { "c":3 , "d":4};

const obj3 = Object.assign({}, obj1 , obj2);
const obj4 = {...obj1 , ...obj2};
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);


//  objects  destructures  and json API 

const Course = {
    course : "JS ",
    price : "999",
    Instructor : "Hithesh",
}
const {Instructor : ins } = Course;
console.log(ins);

console.log(Course.course);
;

let  bar= function ()
{
console.log(` the instructor of the course ${Course.Instructor}`);
}
bar();


// api call

// {
//     "name "  :  "hithesh",
//     "course" :  " js in kannada ",
//     "price"  :  "free"
// }

//  functions in js


