// function isLeap(n){
//    // if((n%4 === 0 && n%100 !==0)|| n%400 ==0){
//    if(n/4 >=500){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isLeap(1900));


// let num = 1234;
// let sum =0;
// for(let i=0;i<num;i++){
//     sum+=i;
// }
// console.log(sum);

// let str= "javascript";
// let vowel = "aeiou";
// let count =0;
// for (let i=0;i<str.length;i++){
//     for(let j=0;j<vowel.length;j++){
//         if(str[i]===vowel[j]){
//             count++;
//         }
//     }
// }
//     console.log(count);


// function isPalindrome(str){
//     let sum="";
//     for(let i=str.length-1;i>=0;i--){
//         sum+=str[i];       
//     }
//     return str === sum;
// }
// isPalindrome("madam");


// const arr=[
//     {name:"A",age:21},
//     {name:"B", age:18},
//     {name:"C",age:13}
// ]
// const res=arr.filter((person)=>person.age>=18).map((persons)=> persons.name);
// console.log(res);

// const arr=[
//     {price:2300,qty:2},
//     {price: 200, qty:1}
// ]
// const res = arr.reduce((sum,item)=>sum+item.price * item.qty, 0);
// console.log(res);


// const arr=[1,7,9,4,6] ;
// const res= arr.find((n)=> n%2==0);
// console.log(res);



// const users = [
//   {
//     name: "Alice",
//     orders: [
//       { amount: 100, status: "delivered" },
//       { amount: 50, status: "pending" },
//       { amount: 200, status: "delivered" }
//     ]
//   },
//   {
//     name: "Bob",
//     orders: [
//       { amount: 120, status: "cancelled" },
//       { amount: 80, status: "delivered" }
//     ]
//   }
// ];
// const result = users.map((user)=>{
//     const delivered= user.orders.filter(order=>order.status==="delivered");
//     const res= delivered.reduce((sum,item)=>sum+item.amount,0); 
//     return {
//     name: user.name,
//     deliveredOrders: delivered.length,
//     res
//   };
// })
// console.log(result);

//--------------------------------------------------------------------------------------------
// Functions  and arrow functions, callback function.
// function updateName(name){
//     return `Hi my name is ${name}`;
// }
// console.log(updateName("Sanju").toUpperCase());

// const add = (a, b) => a+b;
// console.log(add(3,4));


// callback
// function dataFetch(callback){
//     console.log("Data fetching");
//     setTimeout(()=>{
//         console.log("data fetched");
//         callback;
//     },2000);   
// }
// function processData(){
//     console.log("Processing data");
// }
// dataFetch(processData());


// sync and async

// synchronous code
// function subject(sub){
//     return sub + "m1";
// }
// function subject2(sub){
//     return sub + "m2";
// }
// function subject3(sub){
//     return sub + "m3";
// }
// function resultSet(){
//     let sub="Maths";
//     sub= subject(sub);
//     sub= subject2(sub);
//     sub= subject3(sub);
//     console.log(`this is ${sub}`);
// }
// resultSet();


// const mypromise = new Promise((resolve,reject)=>{
//     let num=11;
//     if(num>10){
//         resolve("number greater that 10");
//     }else{
//         reject("Lesser that 10");
//     }
// })

// mypromise.then((result) => {
//     console.log(result);
    
// }).catch((err) => {
//     console.log(err);
    
// });
// mypromise;

// all, allSettled, race , any

// all

// const promise1= Promise.resolve("Promise1 resolved");
// const promise2 = Promise.resolve("Promise2 is solved");
// const promise4 = Promise.reject("Promise4 is rejection");
// const promise3 = Promise.resolve("Promise3 is solved");

// Promise.allSettled([promise1,promise2,promise3,promise4])
//     .then((res)=>{
//         console.log(res);
// }).catch((err)=>{
//     console.log("Any one promise failed");
    
// })

// // setTimeout and setInterval

// const id = setInterval(()=>console.log("Tick"),1000);
// setTimeout(()=> clearInterval(id),5000); // stop after 5 sec


// Async and await

// async function fetchData(){
//     try{
//     const api = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
//     const data = await api.json();
//     console.log(data);
//     }catch(err){
//         console.log("Error in fetching the data",err);    
//     } 
// }
// fetchData();

// classes
// class PersonName{
//     name(){
//     console.log("Sanjay");
//     }
// }
// const  n = new PersonName();
// n.name();







const productData=[{
    id:1,productName:"filter",details:{price:100,quantity:2}
}]

// array to string
let arr = [1,2,3,4,5];
let str= arr.toString();
console.log(str);

// string to array
let arr1= "sanjay, 21";
let res= arr1.split(",");
console.log(res);




















































