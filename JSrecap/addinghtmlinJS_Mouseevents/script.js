// 4 step to add an html using js 



//1..  Create the Element 
const h1=document.createElement("h1");
h1.style.color="tomato";
h1.style.textAlign="center";
// 2 .  add attribute/ properties
h1.textContent=" This is about adding html using js ";


// step3  append  elemnt to the body using DOM




// to add the neww content just after the box 1 

const div1=document.getElementById("box1");
div1.append(h1)

const div2=document.getElementById("box2");
// div2.append(h1)

const div3=document.getElementById("box3");
// div3.append(h1)

const div4=document.getElementById("box4");
// div4.append(h1)



const para=document.createElement("p");
para.style.color="tomato";
para.style.fontSize="30px";

para.style.textAlign="center";
// 2 .  add attribute/ properties
para.textContent=" Adding elemnt using queryselctor ";
document.body.insertBefore(para,div3);

// const boxes=document.querySelectorAll("box");
// document.body.insertBefore(p,boxes[3]);




// remoivng Html  using  JS 


div1.removeChild(h1);



// working with ordered list 
const listele= document.createElement("li");
listele.id="fruit5";

listele.textContent="PineApple";
listele.style.color="yellowgreen";

const fruits=document.getElementById("fruits");

const frui=document.getElementById("fruit2");

fruits.insertBefore(listele, frui);
// document.body.insertBefore(listele,fruits[2]);