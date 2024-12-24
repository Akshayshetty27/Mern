// getter -special method  that makes a property readable 
// setter - special method that makes a property  writable 


class Rectangle{
    constructor(width , height)
    {
        this.width = width;
        this.height=height;
    }
    set width( newwidth)
    {
        if(newwidth >0 )
        {
            this._width = newwidth;
        }else{
            console.error(" width must be a positive number ");
        }
    }

    set height( newheight)
    {
        if(newheight >0 )
        {
            this._height = newheight;
        }else{
            console.error(" height  must be a positive number ");
        }
    }

    get width()
    {
     return this._width;
     }
        get height()
        {
            return this._height;
        }
        get area()
        {
            return (this._height * this._width).toFixed(1);
        }
}

const rec1= new Rectangle(5, 6);

console.log(rec1.height);

console.log(rec1.width);
console.log( " the area of rectangle 1 : ",rec1.area);


// example 2

class Person{
    constructor( Firstname ,Lastname, age )
    {
        this.Firstname=Firstname;
        this.Lastname=Lastname;
        this.age=age;
    }
    set age(newage)
    {
        if(typeof newage === "number")
        {   
             this._age=newage;
        }else{
            console.error(" invalid age ");
        }
    }
    get age()
    {
        return this._age;
    }
    set Firstname(newfirst)
    {
        if(typeof newfirst ==="string"  &&  newfirst.length > 0)
        {
            this._Firstname=newfirst;
        }else{
            console.log( " invalid   firstname")
        }
    }
    get Firstname()
    {
        return this._Firstname;
    }

   

    set Lastname(newlast)
    {
        if(typeof newlast ==="string"  &&  newlast.length > 0)
        {
            this._Lastname=newlast;
        }else{
            console.log( " invalid  last name ")
        }
    }
    get Lastname()
    {
        return this._Lastname;
    }


}


p1= new Person("d","shetty",3);
console.log(p1.age);
console.log(p1.Firstname)
console.log(p1.Lastname);














// destructor in js ->
//   extract values from arrays and objects  then  assign  them  to variables  in a convienient way . 
//[]- to perform array  destuctiong 
// {} - to perform  object destucting 


// examples

 // swap the value 

 let a =1;
 let b=3;
 console.log('a: ',a ," and b: ",b);
 [a,b]=[b,a];
 console.log('a: ',a ," and b: ",b);

 colors=['orange', 'white ', 'black ', 'green','brown'];
 console.log(colors);
 [colors[0], colors[3]]= [colors[3],colors[0]];
 console.log(colors);


 const [firstcolor , sec , third , ...extracolor]=colors;
 console.log( firstcolor);
 console.log( sec);
 console.log(third);
console.log(extracolor);



// extract the value from the object 

const p= { firstname: "Lowda",
           lastname:'Ka baal',
            age:34,
            isemployed:"cook",

        }

const p2= { firstname: "Gowda",
            lastname:'lund ',
             age:31,
            
 
         }

// let { firstname, lastname ,age , isemployed="unemplyed" }=p;
// console.log(firstname);
// console.log(lastname);
// console.log(age);
// console.log(isemployed);

let{ firstname, lastname ,age , isemployed="unemplyed" }=p2;
console.log(firstname);
console.log(lastname);
console.log(age);
console.log(isemployed);
