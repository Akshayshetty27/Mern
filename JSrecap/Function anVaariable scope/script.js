// function and function with parameters 

function wishbirthday( name,age)
{
    console.log(" happy ",age,"th birth day ",name);
}

wishbirthday("akshay",22);
wishbirthday("amma",45);


//return in function

function unique(num)
{
if(num %5 ==0 && num % 3 == 0 )
        return num;
return -1;
}
let one=unique(5);
console.log(one);
for(  i=5;i<100;i++)
{
    let numm=unique(i);
    console.log(numm);
}


function checkmail(mail)
{
    if(mail.endsWith("@gmail.com") || mail.endsWith("@ac.in"))
    {
        return mail;
    }

    return "not valid mail";
}


val=checkmail("shettyakshay333@gmail.com");
 console.log(val);

 val=checkmail("saksh3@ac.in");
 console.log(val);

 val=checkmail("bsdk");
 console.log(val);


 // variavle scope in JS
 // local and global scope of variable 
 let x=3;
//  let x=3; cant declare same variable x 




