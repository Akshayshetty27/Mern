// let newHero= ["hulk","spuderman"];
// console.log("length "+newHero.length);


// function mul5(num)
// {
//     this.num=num;
// return num*5;
// }

// mul5.power= 2;

// console.log(mul5(5));
// console.log(mul5.power);
// console.log(mul5.prototype);




function createUser(username , score){
    this.username=username;
    this.score=score;

}
createUser.prototype.increment =function()
{
    this.score++;
}
createUser.prototype.printMe=function()
{
    console.log(`${this.score}`)
}

const chai = new createUser(" chai" , 70);
const tea = new createUser(" tea", 230);


chai.printMe();
tea.printMe();




//   exapmle 

let myname= "akshay   ";

myname.truelength


let hero = ["thor ", "spiderman"];
let heropower = {
    thor : "Hammer",
    spiderman : "Sling",
    getSpiderPower : function()
    {
        console.log(` Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.akshay=function()
{
    console.log(" i am god ");
} 


heropower.akshay();


Object.prototype.truelength= function()
{
    console.log(`${this.myname}`);
    console.log(`the true length :${this.trim().length}`);


}


/// inheritence 

const Teacher ={
    makevideo : true,
}
const teachingsupport ={
    isAvailable : false ,
    __proto__: Teacher,
}


console.log(teachingsupport.makevideo);