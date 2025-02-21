let adjectves={
    1:"crazy",
    2:"Amazing",
    3:"Fire"
}

let shopName={
    1:"Engine",
    2:"Foods",
    3:"Garments"
}

let Another= {
   1:"Bros",
   2:"Limited",
   3:"Hub"
}

n1= Math.ceil(Math.random()*10 %3);
n2=Math.ceil(Math.random()*10 %3);
n3=Math.ceil(Math.random()*10 %3);

console.log(" ",n1 , "  num2",n2," num3", n3);

let name = adjectves[n1] +" "+ shopName[n2] +" "+Another[n3];
console.log(name);
let con=document.getElementById("name");
con.textContent += `${name}` ;