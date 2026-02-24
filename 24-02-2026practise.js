console.log("23-02-2026");

// Variables

// var count; 
// count =1;
// console.log(count);

// let count;
// count =7;
// count=9;
// console.log(count);

// const count=4;
// console.log(count);
//---------------------------------------------
// Numbers , string to number , number to string
// let a="87";
// let b= parseInt(a);
// console.log(b);

// let number = 45;
// let string = number.toString();
// console.log(string);

// Operators => Arithematic and assignement and comparison operator.

//let num1 = 20;
// let num2 = 30;
// let add = num1+ num2;
// let sub = num1- num2;
// let mul = num1 * num2;
// let div = num1 / num2;
// console.log(add);
// console.log(sub);
// console.log(mul);
// console.log(div);
// console.log(num1++);
// console.log(num1--);

// let num1=3;
// num1+=1;
// console.log(num1);

// let num1= 3;
// let str= "Sanjay";
// let num2=3;

// let res= num1===str;
// let res2= num1===num2;
// console.log(res);
// console.log(res2);

// Array method: => push, pop, unshift, shift, map, filter, reduce, foreach, find, findIndex, includes, indexOf, concat, sort, some, every, join, slice, splice.

// let arr=[1,2,3,4];
// let res= arr.push(5);
// let res1=arr.pop(5);
// let res2= arr.unshift(0);
// let res3 = arr.shift();
// console.log(arr);


// let nums=[1,2,3];
// let doubled=nums.map(n=>n*2);
// console.log(doubled); 

// let nums1=[1,2,3,4];
// let even=nums1.filter(n=>n%2===0);
// console.log(even); 

// let nums2=[1,2,3];
// let sum=nums2.reduce((acc,n)=>acc+n,0);
// console.log(sum); 


// let value=[1,2,3,4];
// value.forEach(element => {
//     console.log(element);
// });

// let values=[1,2,3,4,5];
// let res= values.find((n)=>n>=4);
// console.log(res);

// let nums=[5,10,15];
// console.log(nums.findIndex(n=>n===10));

// let merge=[1,2,3];
// console.log(merge.concat([5]));

// let values=[2,4,5,1];
// let res= values.join(",")
// let sort = values.sort();
// console.log(res);
// console.log(sort);

// ------------------------------------------------------------------------------------------

// String methods: length , toUppercase(), toLowerCase(), trim, includes, indexOf, split , replace, replaceall, slice, substring, startWith, endWith, concat, charAt;
// console.log("Sanjay".length) 
// console.log("Sanjay".toUpperCase()) 
// console.log("Sanjay".toLowerCase()) 
// console.log(" Sanjay ".trim()) 
// console.log("Sanjay".includes("K")); 
// console.log("Sanjay".indexOf("j")) 
// console.log("Sanjay".replace("y","i")); 
// console.log("Sanjay".startsWith("S"));

//--------------------------------------------------------------------------------------------

// Conditionals => if ,else , else if, ternary.

let count =8;
if(count > 7){
    console.log(`The ${count} is greater than 7`);
}else {
    console.log("lesser than 7");
}

let age = 20;
if(age ===18){
    console.log("Person to take voter id");
    
}else if(age>18){
    console.log("Eligible for vote");
    
}else{
    console.log("Not eligible for vote");
}

let ter = (age>=18)? "Voted" : "Not voted";
console.log(ter);

let day="Tuesday";
switch(day){
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    default:
        console.log("Default Message");
}

// Looping  for loop and for...of , for...in , while. do-while, map, filter.

// let str="I am sanjay";
// for(let i=0;i<str.length-1;i++){
//     console.log(str[i]); 
// }

// let arr=[1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// let arr =[1,2,3,4,5];
// for(let array of arr){
//     console.log(array);  
// }

// index + value

// let arr=["Sanjay", "Ram", "Dharsan"];
// for(let array in arr){
//     console.log(array, arr[array]);
// }

let pets=["Dog", "Cat", "Cow"];
// let map= pets.map((n)=>n.toUpperCase());
// console.log(map);

let map= pets.filter((n)=>n.endsWith("g"));
console.log(map);  // Return type is array elements.

// let num=6;
// while(num >= 4){
//     console.log("Hi");
//     num++;
// }


// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// Function
// Parameter function
// default function
// optional Parameter
// Anonymous functions 
// arrow functions




// function greeting(){
//     console.log("Hi Hello I am sanjay");
// }
// greeting();

// function add(num1,num2){
//     return num1 + num2;

// }

// console.log(add(2,3));

// function addPara(name="Sanjay"){
//     console.log(`The name is ${name}`);
    
// }

// addPara();
// addPara("Ram")

// let myApp= function () {
//     console.log("This is the Anonymous Function");
    
// }

// myApp();

// setTimeout(function() {
//     console.log("Hi");
    
// },2000);

// // Arrow function

// let arrowFunction= (a,b)=> a+b;

// console.log(arrowFunction(2,638));

// // CallBack Function

// function greet(){
//     console.log("Greeting");
// }

// function appBuilder(name, callback){
//     console.log(name);
//     callback();  // call the function
// }
// appBuilder("Sanjay", greet);

// --------------------------------------------------------------------------------------------

// Pratise:

let arr = [1,2,-4,-8];
let res= arr.filter((n)=>n>=0)
console.log(res);

var a;
console.log(a);
a=9;

// function hoisted.
api();
function api(){
    console.log("api present"); 
}

let payload=["Sanjay"," is", "here" ];
let payload1=["Learn JS"]
let result= payload.concat(payload1); 
console.log(result);

// Using splice to add the element in specific position

// let values= [1,2,3,4,6];
// values.splice(4,0,5);
// console.log(values);

const products=[{
    id:1,productName:"Watch",details:[{price:23,qty:3},{price:300,qty:4}]},
    {id:2,productName:"Phone",details:[{price:12000,qty:3},{price:12300,qty:4}],
}]

let  values =[1,2,4,6,2];
let resolve=[...values].reverse();
console.log(resolve);
console.log(values);

// Mock

// let str="hello";
// let solution= str.split("");
// let solution1=solution.reverse()
// let join = solution1.join("");
// console.log(solution1);
// console.log(join);


// function isPalindrome(num) {
//   let str = num.toString();
//   let reversed = str.split("").reverse().join("");
//   return str === reversed;
// }
// console.log(isPalindrome(121)); 
// console.log(isPalindrome(123)); 


let arrayElement=[3,7,2,9,1] ;
for(let i=0;i<arrayElement.length;i++){
    if(arrayElement[i]>arrayElement[i+1]){
        console.log(arrayElement[i]);
    }
}


let str = "hello sanjay";

let results = str
  .split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");                     

console.log(results);
















const info= [{
    id:1,studentName:"Sanjay",subject:[{id:1,subjectName:"English"},{id:2,subjectName:"Science"},{id:3,subjectName:"Computer"}]
},{
        id:2,studentName:"Ram",subject:[{id:3,subjectName:"Article"},{id:2,subjectName:"Story"},{id:3,subjectName:"Team"}]
}]


const filter= info.filter(item =>item.subject.some(sub =>sub.subjectName==="Story"))
console.log(filter);



const string = "react code InterVIEw";

const solution = string.toLowerCase().split(" ").map(str=>str.charAt(0).toUpperCase()+str.slice(1)).join(" ");

console.log(solution);















 












































 










































































































































