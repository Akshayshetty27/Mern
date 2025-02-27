

function Setusername(username)
{
    this.username= username;
    
}

function Cretauser(username , email , password){
    Setusername.call(this , username);

    this.email= email;
    this.password = password;

}


const  user1 = new Cretauser("chai" , "abc@.com" , '123');

console.log(user1);