// static =  keyword that defines  properties or meethod that belong to a class itself  than the objects created  from that  (class owns anything  static  not the objects).



class Mathutility
{
    static PI=3.14159;
    static getdiameter(rad)
    {
        return 2*rad;
    }
    static getcircumference(rad)
    {
        return 2*rad*this.PI;
    }
    static getarea(rad)
    {
        return this.PI*rad*rad;
    }

}
const Mat= new Mathutility();

console.log(Mathutility.PI);
diameter=Mathutility.getdiameter(2);
console.log(diameter);
cir=Mathutility.getcircumference(5);
console.log(cir);
area= Mathutility.getarea(4);
console.log(area);




class User{
    static usercount=0;
    constructor (name, age ,email)
    {
       User.usercount+=1;
       this.name= name;
       this.age=age;
       this.email=email;
    }
    getdetails(name,age,email)
    {
        console.log(name);
        console.log(this.age);
        console.log(this.email);
    
    }
    static getusercount()
    {
     console.log(this.usercount);
    }
}

user1= new User("akshay","21","shettyakshay333@gmail.com");
user1.getdetails(user1.name ,user1.age,user1.email);
User.getusercount();
user2= new User("shetty","31","akshay_333@gmail.com");
user2.getdetails(user2.name ,user2.age,user2.email);

User.getusercount();
user3= new User("alan","41","ak_shetty_333@gmail.com");
user3.getdetails(user3.name ,user3.age,user3.email);

User.getusercount();



////inheritence in js
// parent child relation

class Animal{
    alive=true;
    eat()
    {
        console.log(`${this.name} is eating `);
    }
    sleeep(){
        console.log(`${this.name} is sleping`);
    }
}

class rabbit extends Animal{
    name="Rabbit";
    eat(food)
    {
        food="Carrot";
        console.log( ` the ${this.name} is eating ${food}`);
    }
}
class cheetha extends Animal{
    name= "Cheetha";
    run()
    {
        console.log( ` ${ this.name} runs faster`);
    }
}

class child extends cheetha{
    child(na)
    {
        this.name=na;
    }
    run()
    {
        console.log(`${ this.name} cant run faster`);
    }
}

const rabbit1= new rabbit();

const ch= new cheetha();


const childcheetha= new child("chikuu");

rabbit1.eat();
rabbit1.sleeep();

ch.eat();
ch.sleeep();
ch.run();

childcheetha.run();


//  super  keyword in JS  
// used call the  parent consstructor 

class Vehicle{
    constructor(name , cc )
    {
        this.name= name;
        this.cc= cc;
    }
    move(speed)
    {
        console.log(" the vehicle moves ",speed,"mph");
    }
}
class bike extends Vehicle
{
   
constructor(name , cc ,owner)
{
    super(name,cc);
    this.owner=owner;
  
}

display()
{
    console.log("the bike name ",this.name," and engine is :",this.cc,"owned by ",this.owner);
    super.move(45);
}
}
class car extends Vehicle{
    constructor(name , cc,owner )
{ 
    super(name,cc);
    this.owner=owner;

}
display()
{
    console.log("the car name ",this.name," and engine is :",this.cc,"owned by ",this.owner);
    super.move(50);
}
}


b1= new bike('Royal Enfield bullet ',"650 cc","akshay");
c1= new car("Maruthi 800",'799',"maran");

b1.display();
c1.display();
console.log(b1.name);