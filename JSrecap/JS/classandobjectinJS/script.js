let obj= {
    a:1,
    b:10,
    c:11
}

console.log(obj);
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

 let animal = {
    eat :true,
 };

 let rabbit = {
    run : true,
    color : "white",
 };

rabbit.__proto__ = animal;
// sets the rabbit.[[Prototype]] = animal ; like extend in java


class Animal{
constructor(name)
{
    this.name= name;
    console.log("i am a ",name);
}
eats()
{
    console.log(" animal eats ");

}

hunt()
{
    console.log( " the animal hunts ");
}
}


let animal1= new Animal("rabbit");
animal1.eats();



