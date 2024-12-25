function calulate()
{

    let amtInput = document.getElementById("amount");
    let rateinput =document.getElementById("rate");
    let timeinput = document.getElementById("time");

    let price= Number(amtInput.value);
    // console.log(price);
    let rat=Number(rateinput.value /100);
    let tim= Number(timeinput.value);

    result= price*rat*tim;
    document.getElementById("theresult").textContent += `${result}`;



}