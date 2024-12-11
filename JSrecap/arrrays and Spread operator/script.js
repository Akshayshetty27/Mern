let fruits=["banana","Apple","orange"];
console.log(fruits);
console.log(fruits[0]);
fruits[0]="coconut";
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits.push("Banana");
console.log(fruits);
fruits.unshift("Watermelon");
console.log(fruits);
console.log(fruits.indexOf("Banana"));


for(i=0; i<fruits.length;i++)
{
    console.log(fruits[i]);
}
console.log("enhanced method");
for( str in fruits)
{
    console.log(fruits[str]);
}

fruits.sort();
console.log(fruits);


// 2d array
matrix=[[1,2,3,],[4,5,6],[7,8,9]];

for (i=0;i<3;i++)
{
    for(j=0;j<3;j++)
{
    console.log(matrix[i][j]);
}
}


/// spread operatord in js
 number=[1,2,4,5,6];
 max=Math.max(...number);
 console.log(" the maximum number",max);

 arr=[7,8,9];
 com=[...arr,...number];
 console.log(com);