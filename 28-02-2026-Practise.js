// // Practise 
// console.log("Saturday");

// let arr=[5,3,5,8,4,0,3];
// let res=arr.sort();
// for(let i=0;i<res.length;i++){
//     console.log("Second largest",res[i+1]);
//     break;
// }
// console.log(res);

// let s = "00000001111111";  // 13

// console.log(s.length-1);



// async function example() {
//     try{
//         const a = await Promise.resolve(1);
//         console.log(a);
        
//     }
//     catch{
//         console.log("Error");
        
//     }try{
//         const b= await Promise.reject("Error");
//         console.log(b);
        
//     }
//     catch{
//         console.log("Error in second block");
        
//     }
//     try {
//         const c=  await Promise.resolve(3);
//         console.log(c);
        
//     }
//     catch{
//         console.log("Error handling in 3 block");
        
//     }
// }

// example();

// // Array => Push, pop, unshift, shift, map, reduce, filter , find, findIndexOf , includes, join, sort, splice, slice, concat, length, some, every

// // string => length, substring, split, toUpperCase, toLowerCase, trim, indexOf, startswith, endswith, includes, charAt, lastIndexof, replace, replaceAll,
// console.log([] == false);

// const users = [
//   { name: "Sanjay", active: true },
//   { name: "John", active: false }
// ];

// const result = users.filter((item)=> item.active===true);

// console.log(result);


// const obj = {
//   name: "Sanjay",
//   greet: function () {
//     console.log(this.name);
//   }
// };

// const fn =  obj.greet.bind(obj);
// fn();


// const obj1 = { a: { b: 1 } };
// const obj2 = { ...obj1 };

// obj2.a.b = 5;

// console.log(obj1.a.b);

// const object = { name: "Sanjay" };
// object.name = "John";
// console.log(object);



// //How to remove duplicates?

// let arr1=[1,2,3,3,4,5,6,1];
// let arr2=[...arr1];
// let arr3=[];
//  for (let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//        if( arr1[i]===arr2[j]){
//        arr3.push(arr[i]);
//     }
 

// }
// }

//  console.log("Element",arr3);


//  const a = { x:1 };
// const b = a;
// b.x = 5;
// console.log(a.x);



/////////////////////////////////////////////////////////////////////////////////////////

// function and block scope

// function scope(){
   
//     if(true){
//          var a=8;
       
//         console.log(a);
        
//     }
//     console.log(a);
    
// }

// scope();

// function scope(){
//     if(true){
//         let a=8;
//         console.log(a);
        
//     }
    
// }
// scope();


// Function declaring 
function scope(){
    console.log("Function Declaring");
    
}
scope();

// Function Expression
const add = (a,b)=>{
    return a+b
}
console.log(add(6,68));

// IIFE

const log=(function (){
    console.log("Immediately invoved function");
    
})

log();

// callback function

function data(callback){
    setTimeout(()=>{
        console.log("Fetching");
        callback();
    },1000);
}

function process(){
    console.log("Processing data");
    
}
data(process); // Function that takes an argument as another function


// const obj1 = { a:1, b:{c:2} };

// const obj2 = {...obj1};

// obj2.b.c = 100;

// console.log(obj1.b.c); // 100 

// Deep copy

const obj1={ a:1, b:{c:2} };

 const obj2 = JSON.parse(JSON.stringify(obj1))


obj2.b.c=3949;

console.log(obj2);
console.log(obj1);


// Closure Example

function outer(){
    let count =8;
    return function inter(){
        count++;
        console.log(count);
        
    }
}

let cloure= outer();

console.log(cloure());















console.log('A'); 
setTimeout(() => console.log('B'), 0); 
Promise.resolve().then(() => 
console.log('C')); 
console.log('D');





const { a = 1, b = 2 } = { a: null }; 
console.log(a, b); 

//const title = "  Hello World! Welcome 
//to JS "; 
// Expected output: "hello-world
//welcome-to-js" 


const title = " Hello World! Welcome to JS";

const solution= title.trim().toLowerCase().split("/\s+/").join("-");
console.log(solution);

const mypromise= new Promise((resolve,reject)=>{
    let a=6;
    if(a===6){
        let b=9;
        resolve("a is equal to 6");
    }else{
        reject("Not equal");
    }
})

mypromise.then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
}).finally(()=>{
console.log("Finally block excuted");
})


// Iterator examples
const element =[1,3,4];
const iterator = element[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

let day ="";
switch(day){
    case "Monday":
        console.log(" This week work has been complete on monday");
        break;
    case "Tuesday":
        console.log("This is tuesday");
        break;
    default:
        console.log("Not done");
}












