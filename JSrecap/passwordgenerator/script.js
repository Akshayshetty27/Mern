

function generate(length,includeLowercase,includenumber,includesymbols,includeUpercase )
{
const lowercase="abcdefghijklmnopqrstuvwxyz";
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num="1234567890";
const sym="!@#$%^&*()_+=";
len=0;
generated="";
while(len < length)
{
if(!includeLowercase)
{
n=Math.floor(Math.random(1,26)*10 +1);
console.log(n);
len++;
generated+=lowercase[n];
includeLowercase=true;
}else if(!includeUpercase)
{
    n=Math.floor(Math.random(1,26)*10 +1);
len++;
generated+=uppercase[n];
includeUpercase=true;
}else if(!includenumber)
{
    n=Math.floor(Math.random(1,9)*10 +1);
    len++;
    generated+=num[n];
    includenumber=true;
}else if(!includesymbols)
{
    n=Math.floor(Math.random(1,13)*10 +1);
    len++;
    generated+=sym[n];
    includesymbols=true;
}
else if(includeLowercase && includeUpercase && includenumber && includesymbols)
{
    n=Math.floor(Math.random(1,26)*10 +1);
    
    generated+=sym[n];
    generated+=num[n];
    generated+=lowercase[n];
    generated+=uppercase[n];
    len=len+4;

}
}


return generated;
}





const password=12;
const includeLowercase=false;
const includeUpercase=false;
const includesymbols=false;
const includenumber=false;

const pas=generate(password,includeLowercase,includenumber,includesymbols,includeUpercase);
console.log("generated password",pas);