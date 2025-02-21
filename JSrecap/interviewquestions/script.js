//question 1
let  arrname=["akshay", "abhilash","arun joel desouza ","sudeep", "thejas"];
let A=[];
let B=[];
let C=[];
let D=[];

for( i in  arrname)
{
    console.log(arrname[i]);
    if(arrname[i].length >0 && arrname[i].length < 7)
{
    A.push(arrname[i]);
}else if(arrname[i].length  >6 && arrname[i].length  < 8)
{
    B.push(arrname[i]);
}else if( arrname[i].length >8 && arrname[i].length  <10 )
{
    C.push(arrname[i]);
}else{
    D.push(arrname[i]);
}
}
console.log(" a group team memebers ")
console.log(A," ");
console.log(" b group team memebers ")
console.log(B);
console.log(" c group team memebers ")
console.log(C);
console.log(" d group team memebers ")
console.log(D);



// 2 nd question 
let  num=[2,3,6,7,8];

for( i=0; i<num.length - 1 ;i++)
{
    let n = num[i];
    if(n +1 == num[i + 1])
    {
        num[i] = num[i] + num[i];
        i++;
    }else{
        num[i] = num[i] + num[i];
    }
}

for( i in num){
    console.log( num[i]);
}

// third question 

let str="akshay";

let dup="";

for( i= str.length - 1 ; i>= 0 ;i-- )
{
    dup+= str[i];
}

console.log( dup);
str+= dup;
console.log(str);

// 4 th question 
// password validator 

let password="Jaishreeram@07";

let isdigit=false;
let isUpper=false;
let islower=false;
if( password.length < 8 )
{
    console.log(" the password length has to be bigger ");
}else{
for(i=0 ; i<password.length; i++ )
{
    if(password[i] >= 'a' && password[i] <= 'z')
    {
        islower=true;
    }else if(password[i] >='A' && password[i] <='Z')
    {
        isUpper= true;
    }else if(password[i] >='0' && password[i] <='9')
    {
        isdigit=true;
    }
}
}

if( isdigit && isUpper && isUpper && islower)
{
    console.log(" the password is correct ",password);
}else{
    console.log(" the password is incorrect \n ",password);

}


// question5
let  arr=[5,20,-32,2];
let sum =0;
function returnsum(arr)
{
    for( i in arr)
    {
        if( arr[i] < 0)
        {
            console.log(sum);
            return;
        }else{
            sum += arr[i];
        }
    }
console.log(sum);
}

returnsum(arr);


// question 6
// vowel counter 

str= "akshay";
let vowelcount=0;

for(i in str)
{
    if(str[i] == 'a' || str[i] == 'A' ||str[i] == 'e' ||str[i] == 'E' || str[i] == 'i' ||str[i] == 'I' || str[i] == 'o' || str[i] == 'O' || str[i] == 'u' ||str[i] == 'U' )
    {
        vowelcount+= 1;
    }

}
console.log(" the vowels in the string : "+str +" = "+vowelcount);


// local storage concept  q7