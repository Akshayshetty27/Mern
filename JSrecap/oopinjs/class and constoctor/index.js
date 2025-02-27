class User
{
    constructor(username){
        this.username=username;
    }
  encryptpassword()
  {
    return `${this.password}abc`;
  }
  getusername()
  { 
    return `${this.username.toUpperCase()}`

  }
}


user1 =  new User("akshay","abc@.com","a3d3");
console.log(user1.encryptpassword());
console.log(user1.getusername());




class Teacher extends User{

constructor( username,email , password)
 {
    super(username);
    this.email=email;
    this.password=password;
 }
    
 addCourse(){
    console.log(` the course was added by ${this.username}`)
 }
 
}

teacher1 =  new Teacher("hithesh" , "hitesh@.com" , "password123");

teacher1.addCourse();
