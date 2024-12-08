let age= 13;
if( age > 18)
{
    console.log(" he can  have a license ");

}else{
    console.log(" wait until you turn 18 child ");
}



document.getElementById("sub").onclick=()=>{
    let name=document.getElementById("firstname").value;
    console.log(name);
    let age=document.getElementById("age").value;
    console.log(age);
    document.getElementById("greet").textContent="Welcome "+name;
    if(age <18)
    {
        console.log("child ");
    }else if( age<35)
    {
        console.log("young boy ");
   
    }else if(age <60)
    {
        console.log("old boy ");

    }else{
        console.log("senior citizen");

    }
}


let v=document.getElementById("subscribeee");

document.getElementById("submit").onclick=()=>
{
    if(v.checked)
    {
        document.getElementById("con").textContent=" you are subscribed";
    }else if(!v.checked){
        document.getElementById("con").textContent=" you are not subscribed select a payment method ";

       if( document.getElementById("method1").checked)
       {
        document.getElementById("con2").textContent=" Subscribed with visa ";
       }else  if( document.getElementById("method2").checked)
       {
        document.getElementById("con2").textContent=" Subscribed with mastercard";
       }else if( document.getElementById("method3").checked)
       {
        document.getElementById("con2").textContent=" Subscribed with Online payment ";
       }
       else{
        document.getElementById("con2").textContent=" you are not subscribed select a payment method ";
       }


    }
}


// let username="akshay";
// let user=prompt("enter username");
//  min=username.length;

// count=0;
// while(count < min)
// {
//     if( (count == Number(min)  - 1) && (username.charAt(count) == user.charAt(count)))
//     {
// console.log("login succesful");
// break;
//     }else if(username.charAt(count) == user.charAt(count))
// {
//     console.log(user.charAt(count));
//     count++;
// }else{
//     console.log( "username mismatching login failed");
// //     break;
// // }
// // }

// login=false
// count=0;
// while(!login && count < 5)
// {
// username=window.prompt(" enter your username ");
// password=window.prompt(" enter your password");

// if( username=="akshay" && password=="password")
//     {
// login=true;
// console.log(" login was successfull");
//     }
//     else if(count<5){
//         console.log("enter valid username and password");
//         count++;
//     }else{
//         console.log( "you have entered wrong username or password more than permited time");
//     }
// }



// for loops
for(i=0;i<20;i++)
{
    if( i%3 ==0)
    {
        continue;
    }
    else if(i%19 == 0)
    {
        break;
    }
    console.log(" hello",i+1);

}

// print element of array or list
arr=[2,3,"akejf",45,true,'a'];
for(i in arr)
{

    console.log(arr[i] ," ",typeof(arr[i]));
}
