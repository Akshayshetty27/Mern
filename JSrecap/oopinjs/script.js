// javascript  and classes 

class Student{
    constructor(name, usn)
    {
        this.name=name;
        this.usn=usn;
        console.log(` Welcome ${this.name}`)

    }
    getdetails(){
        return ` name : ${this.name}  usn: ${ this.usn} `
    }
    }


    class Updatestudent extends Student{
        constructor(name , usn ,age)
        {
            super(name,usn);
            this.age =age;
        }

        getdetails()
        {
            return super.getdetails() + ` age : ${this.age}`
        }
    }

stu1= new Student("akshay","4MT21IS004");

    console.log(stu1.getdetails());

stu2 = new Updatestudent( "akshay","4MT21IS004", 21);

console.log(stu2.getdetails());


