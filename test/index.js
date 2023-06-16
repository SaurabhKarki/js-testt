// // I'm using VAR keyword
// var a = '123';
// console.log(a);

// // I'm using let keyword.
// let b ='456';
// console.log(b);

// // I"m using const keyword

// const c= 789;
// console.log(c);

// // alert("Hello Bro!");

// // const age = prompt("How old are you?");
// // console.log(age);

// // const isBoss = confirm("Are you the boss");
// // console.log(isBoss);

// let x=1;
// if(x==1)
// {
//     console.log("if x==1");
// }

// if(x===1 && y===2)
// {
//     console.log("&& operator tested");
// }

// if((x=1) || (y=2))
// {
//     console.log("||Operator is tested");
// }

// if(!x)
// {
//     console.log("x is not true");
// }


// if(x==1)
// {
//     console.log("x is 1");
//  } else {
//     console.log("x is not 1");
//  }

// //  let result = x ===1 ? "x is 1" : "x is not 1";

//  let result = x===1 ? "x is 1" : x ===2 ? "x is 2" : "x is not 1 or 2";

//  console.log(result);


//  //learnt about loops

//  for(let i=0; i<10; i++)
//  {
//     console.log(i);
//  }

//  //learning about functions

//  //Functions are the main building blocks of program.
//  //They allow the code ot be called many times without repitition.

// //eg: function sayHi(name){
// //  alert("Hello,${name});
// // }
// // sayHi("JS Class"); // hello, JS class


// function add(a,b){
//     //return a+b;
//     console.log(a+b);
// }

// add(1,2);
// add(4,5);

//ES6 style(Arrow Function)
const add = (a,b) =>{
    console.log(a+b);
};

function area(a,b)
{
    return a*b;
}

add(1,2);
add(4,4);