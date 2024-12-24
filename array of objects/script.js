const fruits=[{name:"Apple" , color:"Red",calories:150},
    {name:"orrange" , color:"Orrange",calories:110},
    {name:"Banana" , color:"Yellow",calories:175}
];

console.log( fruits[0].name);
console.log( fruits[0].color);
console.log(fruits[1].name);
console.log( fruits[1].color);
fruits.push({name:"Pineapple",color:"yello",calories:250});
console.log(fruits[3].name);
console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.splice(0,1);
console.log(fruits);


const names= fruits.map(fruit => fruit.name);
const colorss= fruits.map(fruit => fruit.color);

console.log(names);
console.log(colorss);

const cal= fruits.filter(fruit=>{
    if(fruit.calories > 150)
    {
        return fruit.name;
    }
});
console.log(cal);
const lowcal= fruits.filter(fruit=>{
    if(fruit.calories < 150)
    {
        return fruit.name;
    }
});


console.log(lowcal);




//  sort( )
//  it is going to sort the in the lexical graphic manner
// it does trea everything as the string 


f=["apple","orange","banana","grapes"]
f.sort();
console.log(f);

num=[4,3,2,1,5,6,7,8,10];
num.sort();
console.log(num);
num.sort((a,b)=> a-b);
console.log(num);
num.sort((a,b)=> b-a);
console.log(num);

const persons=[{name:"akshay", age:21, marrried:true},
         {name:"shetty", age:31, marrried:true},
         {name:"govind", age:11, marrried:false},
]
console.log(persons);
persons.sort((a,b) =>  a.age- b.age);
console.log(persons);
// persons.sort((a,b) =>  a.name - b.name);
// console.log(persons);