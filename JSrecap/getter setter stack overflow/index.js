

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email()
    {
        return this._email;
    }
    set email(newmail)
    {
        this._email=newmail;
    }
    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value.toUpperCase();
    }
}

let  user1 = new User("akshay@gmail.com", "password");

console.log(user1.password); 


class NewUser{

    constructor(name , email )
    {
        this.email= email;
        this.name=name;
    }

    get name()
    {
        return this._name;
    }
    set name(newname)
    {
        this._name= newname;
    }


}

akshay = new NewUser("akshay","shetty@gmail.com");
console.log( akshay.email);
console.log( akshay.name);
akshay.name="arjun";
console.log( akshay.name);





