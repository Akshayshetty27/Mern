const person={
    name: "akshay",
    age:21,
    hobbies:["reading","cycling "],
    address:{
        street : "Marbu ",
        road :" Barkur road ",
        pincode : "576-213",
    }
};

console.log( person.name);
console.log(person.address.street);
console.log(person.hobbies[1]);

console.log( " accessing each propeties through the for loop ");
for( p in person .address)
{
    console.log(p);
}




class Person {
    constructor( name , age , ...address)
    {
        this.name= name;
        this.age=age;
        this.address= new Address(...address);
    }
}
class Address{
    constructor( strre, city , country)
    {
        this.city=city;
        this.strre=strre;
        this.country=country;

    }
}

const per = new Person("akshay",31, "Marbu","brahmavara" , "India");

console.log(per.name);
console.log(per.age);
console.log(per.address.country);


