// import axios from "axios";

// function process(){
//     console.log("Processing");
    
// }
//  async function res(){
//     try{
// const data = await process();
//     console.log(data);
//     }catch(err){
//         console.log("Error",err);
        
//     }  
// }
//  res();

// // Closure

// function outer(){
// let count =1;
//  function inner(){
//     count++;
//     console.log(count)
// }
// return inner;
// }

// const closure= outer();
// closure()

// const arr = [  { id: 1, name: "test user1", price: 20, fruit: 
// ["apple", "mango"] },{ id: 2, 
// name: "test user2", price: 60, 
// fruit: ["apple", "grapes"] },{ 
// id: 3, name: "test user3", price: 
// 40, fruit: ["mango", "grapes"]  
// }, 
// ]

// arr.forEach(element => {
//     console.log(Object.entries(element));
    
// });

// const values= [1,2,3];

// const data= values[Symbol.iterator]()

// console.log(data.next());
// console.log(data.next());
// console.log(data.next());
// console.log(data.next());

// const arr1 = [
//   { id: 1, name: "test user1", price: 20, fruit: ["apple", "mango"] },
//   { id: 2, name: "test user2", price: 60, fruit: ["apple", "grapes"] },
//   { id: 3, name: "test user3", price: 40, fruit: ["mango", "grapes"]  },
// ]

// const result = arr1.filter(item=>item.fruit.includes("apple") && item.price>50);
// console.log(result);

// const person = {
//   name: "Sanjay",
//   age: 22,
//   city: "Chennai",
//   job: "Developer"
// };

// Object.entries(person).forEach(([key, value]) => {
//   if (key !== "age") {
//     console.log(value);
//   }
// });

// // Action to be done => Practice

// const users = [
// {name:"A", age:17},
// {name:"B", age:22},
// {name:"C", age:19}
// ];


// const user = users.filter(item=>item.age>18)
// console.log(user);

// //Count how many times each value appears
// const fruits = ["apple","banana","apple","orange","banana","apple"];

// const red= fruits.reduce((acc,item)=>{
//     acc[item]=(acc[item]|| 0)+1
//     return acc;
// },{})
// console.log(red);

// const arr3= [1,2,34,5,6,]

// const somSolution = arr3.some(item=>item===""); // false
// const alter = arr3.some(item=>item); // true
// console.log(somSolution);


// const filSolution = arr3.find(item=>item); // return 1st element or value
// console.log(filSolution);



//     axios.interceptors.response.use(response=>response,error=>{
//         if (error.response && error.response.status===401){
//             console.log("Unauthorized");
            
//         }
//         return Promise.reject(error)
//     })
// async function getData(){
//     const api = await axios.get("http://jsonplaceholder.typicode.com/users")

//     console.log(api);
// }
// getData();

// Regex pattern

const regexPattern= "hello world"
const results= /hello/.test(regexPattern);
console.log(results);

const pat1= /\d/;
console.log(pat1.test("Sanjay123"));


// if only contains alphabets

const pat2= /^[A-Za-z]+$/
console.log(pat2.test("Sanjay"));

// Password validation

const pat3= /^[A-Z]{4}[\d]{4}&/;
console.log(pat3.test("Test1234"));

















