// I'm using VAR keyword
var a = '123';
console.log(a);

// I'm using let keyword.
let b ='456';
console.log(b);

// I"m using const keyword

const c= 789;
console.log(c);

// alert("Hello Bro!");

// const age = prompt("How old are you?");
// console.log(age);

// const isBoss = confirm("Are you the boss");
// console.log(isBoss);

let x=1;
if(x==1)
{
    console.log("if x==1");
}

if(x===1 && y===2)
{
    console.log("&& operator tested");
}

if((x=1) || (y=2))
{
    console.log("||Operator is tested");
}

if(!x)
{
    console.log("x is not true");
}


if(x==1)
{
    console.log("x is 1");
 } else {
    console.log("x is not 1");
 }

 let result = x ===1 ? "x is 1" : "x is not 1";

 let result = x===1 ? "x is 1" : x ===2 ? "x is "2 : "x is not 1 or 2";