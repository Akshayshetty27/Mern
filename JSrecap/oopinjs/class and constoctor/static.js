class User
{
    constructor(username)
    {
        this.username = username;
    }
    getusername()
    {
        console.log(""+this.username);
        
    }

    static createid()
    {
        return `123`
    }
}

class Teacher extends User{
    constructor( username,email )
 {
    super(username);
    this.email=email;
 }
}
const hithesh = new User("Hithesh");
hithesh.getusername();
console.log(hithesh);


const t= new Teacher("raji","i@phone.com");
t.getusername();

