// this - reffference to the object where THIS is used  ( the object depends on the immediate  context ).
// 

const person1={
    name: "Spongue bob",
    favfood:'chicken ',
    sayHello: function(){
        console.log(`hello from ${this.name} \n `);
    },
    eat: function()
    {
console.log(` \n ${this.name} have eaten ${this.favfood}`)
    },
}

console.log(person1.name);
console.log(person1.favfood);
person1.sayHello();
person1.eat();




// console.log(this);



/// constructor in java script 

// special method for defining the  properties  and methids of objects 



const car1={
    name: "fortuner",
    model:'2024',
    owner:"akshay",
    color:"Red",
    drive:function()
    {
        console.log(`${this.name} was being droven by
            ${this.owner} `);
    },
}


   function Car(name,model,owner,color)
    {
        this.name=name;
        this.m=model;
        this.ow=owner;
        this.c=color;
        this.drive=function()
        {
            console.log(`${this.name} is being driven by ${this.ow}`);
        }
    }

c1= new Car("BMW",'2024',"Shetty","Black");
console.log("name:",c1.name);
console.log("name:",c1.m);
console.log("name:",c1.ow);
console.log("name:",c1.c);
c1.drive();

console.log("\n\n\n");



c2= new Car("audi",'2025',"Shetty","Black");
console.log("name:",c2.name);
console.log("name:",c2.m);
console.log("name:",c2.ow);
console.log("name:",c2.c);
c2.drive();
console.log("\n\n\n");


c3= new Car("charvelet",'2024',"Shetty","blue");
console.log(" \n name:",c3.name);
console.log(" \n name:",c3.m);
console.log(" \n name:",c3.ow);
console.log(" \n name:",c3.c);
c3.drive();


console.log("\n\n\n");


// classes 

// classes provide a more strucure and dcleaner way to  work with objects  compared traditional constrructor functions   ex: statc keyword , enclapsuuation 

class Product {

    constructor(name,price)
    {
        this.name=name;
        this.price=price;
    }

    displayprodut()
    {
        console.log(` the product name is : ${this.name} \n product price : ${this.price}`);
    }
    totalprice()
    {
        this.salestax=( this.price *0.15);
        this.total=this.price+ this.salestax;
        console.log(" tax price :"+this.salestax);
        console.log(" total price :"+this.total);
    }
}

pen= new Product('pen',5);
pen.displayprodut();
pen.totalprice();
console.log("\n\n\n");


pencil = new Product('Apsara', 15);
pencil.displayprodut();
pencil.totalprice();



