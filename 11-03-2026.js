import axios from "axios";

// Array methods
// const customers = [
// {
//  id:1,
//  name:"Sanjay",
//  city:"Chennai",
//  orders:[
//    {product:"Laptop",price:80000,quantity:1,category:"Electronics"},
//    {product:"Mouse",price:500,quantity:2,category:"Electronics"}
//  ]
// },

// {
//  id:2,
//  name:"Rahul",
//  city:"Mumbai",
//  orders:[
//    {product:"Shoes",price:3000,quantity:1,category:"Fashion"},
//    {product:"Tshirt",price:1000,quantity:3,category:"Fashion"}
//  ]
// },

// {
//  id:3,
//  name:"Priya",
//  city:"Bangalore",
//  orders:[
//    {product:"Mobile",price:20000,quantity:1,category:"Electronics"},
//    {product:"Headphones",price:2000,quantity:2,category:"Electronics"}
//  ]
// },

// {
//  id:4,
//  name:"Arun",
//  city:"Chennai",
//  orders:[
//    {product:"Watch",price:5000,quantity:1,category:"Fashion"},
//    {product:"Laptop",price:90000,quantity:1,category:"Electronics"}
//  ]
// }
// ];
const customers = [
{
id:1,
name:"Sanjay",
city:"Chennai",
orders:[
   {product:"Laptop",price:80000,quantity:1,category:"Electronics"},
   {product:"Mouse",price:500,quantity:2,category:"Electronics"},
   {product:"Keyboard",price:1500,quantity:1,category:"Electronics"}
]
},
 
{
id:2,
name:"Rahul",
city:"Mumbai",
orders:[
   {product:"Shoes",price:3000,quantity:1,category:"Fashion"},
   {product:"Tshirt",price:1000,quantity:3,category:"Fashion"},
   {product:"Cap",price:800,quantity:2,category:"Fashion"}
]
},
{
id:3,
name:"Priya",
city:"Bangalore",
orders:[
   {product:"Mobile",price:20000,quantity:1,category:"Electronics"},
   {product:"Headphones",price:2000,quantity:2,category:"Electronics"}
]
},
 
{
id:4,
name:"Arun",
city:"Chennai",
orders:[
   {product:"Watch",price:5000,quantity:1,category:"Fashion"},
   {product:"Laptop",price:90000,quantity:1,category:"Electronics"}
]
},
 
{
id:5,
name:"Neha",
city:"Delhi",
orders:[
   {product:"Tablet",price:30000,quantity:1,category:"Electronics"},
   {product:"Shoes",price:4000,quantity:2,category:"Fashion"}
]
},
 
{
id:6,
name:"Kiran",
city:"Hyderabad",
orders:[
   {product:"Camera",price:45000,quantity:1,category:"Electronics"},
   {product:"Tripod",price:3000,quantity:1,category:"Electronics"}
]
}
];
const map= customers.map((item)=>{
    return{
        id:item.id,
        name:item.name,
        city:item.city,
        product:item.orders.map(item=>item.product),
        totalPrice:item.orders.reduce((acc,item)=>{
        return acc+(item.price*item.quantity)
    },0)
    }
})
console.log(map);

const arr = [10,20,30];
const result = arr.some(x => x);
console.log(result); // true 
const arr1 = [10,20,30];
const result1 = arr.every(x => x );
console.log(result1); // true

// Practice

const ques1= 
        customers.reduce((acc,item)=>{
            acc[item.orders.some(item=>item.category==="Electronics")]=(acc[item.orders.some(item=>item.category==="Electronics")]) || [];
            acc[item.orders.some(item=>item.category==="Electronics")].push(item.name);
            return acc;
        },{})
console.log(ques1);

const ques2= customers.filter(item=>item.orders.some(item=>item.category==="Electronics")).map(item=>item.name);
console.log(ques2);

const ques3= customers.reduce((acc,item)=>{
    item.orders.forEach(item=>{
        acc[item.category]= (acc[item.category]|| 0)+1;
    })
    return acc;
},{})
console.log(ques3);

// Find the most expensive product purchased
// Return
// {
//  product:"Laptop",
//  price:90000,
//  customer:"Arun"
// }



const ques4 = customers.flatMap(item=>item.orders.map((items=>{
    return{
        product:items.product,
        price:items.price,
        customer:item.name
    }
    
})).reduce((acc,item)=> item.price>acc.price?item:acc))
console.log(ques4);

const ques5= [
    ...new Set(
        customers.filter(item=>item.city==="Chennai").flatMap(item=>item.orders.map(item=>item.product))
    )
]
console.log(ques5);

// ques6
// ques7
const ques7 = customers.reduce((acc,item)=>{
      acc[item.city]=(acc[item.city])|| []
      acc[item.city].push(item.name)
      return acc;
},{})
console.log(ques7);

// 9️ Find the average order value per customer
// Average order value =
// (total price × quantity) / number of orders
// Output
// [
//  {name:"Sanjay", avgOrderValue: 27333},
//  {name:"Rahul", avgOrderValue: 1933}
// ]

const ques9= customers.map(item=>{
    const total= item.orders.reduce((acc,item)=>{
        return acc+item.price*item.quantity
    },0)
    return {
        name:item.name,
        avg:total/item.orders.length
    }
})
console.log(ques9);
// ---------------------------------------------------------------------

// local storage and session storage

// const data = localStorage.getItem("name");
// console.log(data)

// VM230:2 Sanjay
// undefined
// localStorage.removeItem("name")
// undefined
// const data = localStorage.getItem("name");
// console.log(data)

// VM292:2 null
// undefined
// localStorage.setIten({"name":"Sanjay", "age":23})
// localStorage.setItem("user",JSON.stringify({name:"Sanjay", age:23}))
// undefined
// const data = localStorage.getItem("user");
// console.log(data)

// VM497:2 {"name":"Sanjay","age":23}
// undefined
// localStorage.removeItem("name")
// undefined
// const data = localStorage.getItem("user");
// console.log(data)

// VM526:2 {"name":"Sanjay","age":23}
// undefined
// localStorage.removeItem("user")
// undefined
// const data = localStorage.getItem("user");
// console.log(data)

// VM546:2 null
// undefined
// localStorage.setItem("user",JSON.stringify({name:"Sanjay", age:23}))
// undefined
// const data = localStorage.getItem("user");
// console.log(data)

// VM568:2 {"name":"Sanjay","age":23}
// undefined
// const result = JSON.parse(localStorage.getItem("user")
// VM966:1 Uncaught SyntaxError: missing ) after argument listUnderstand this error
// const result = JSON.parse(localStorage.getItem("user"))
// undefined
// delete result.name
// true
// const data = localStorage.getItem("user");
// console.log(data)

// VM1053:2 {"name":"Sanjay","age":23}
// undefined
// localStorage.setItem("result", Js)
// VM1120:1 Uncaught ReferenceError: Js is not defined
//     at <anonymous>:1:32
// (anonymous) @ VM1120:1Understand this error
// localStorage.setItem("result", JSON.stringify(result))
// undefined
// localStorage.getItem("result")
// '{"age":23}'
// localStorage.getItem("user");

// '{"name":"Sanjay","age":23}'


//--------------------------------------------------------------------------

// sessionStorage.getItem("name")
// null
// sessionStorage.setItem("name","Sanjay")
// undefined
// sessionStorage.getItem("name")
// 'Sanjay'
// const user= sessionStorage.setItem("user",JSON.parse({name:Sanjay,age:22}))
// VM2324:1 Uncaught ReferenceError: Sanjay is not defined
//     at <anonymous>:1:60
// (anonymous) @ VM2324:1Understand this error
// const user= sessionStorage.setItem("user",JSON.parse({name:"Sanjay",age:22}))
// VM2331:1 Uncaught SyntaxError: "[object Object]" is not valid JSON
//     at JSON.parse (<anonymous>)
//     at <anonymous>:1:48
// (anonymous) @ VM2330:1Understand this error
// const user= sessionStorage.setItem("user",JSON.stringify({name:"Sanjay",age:22}))
// undefined
// sessionStorage.getItem("user")
// '{"name":"Sanjay","age":22}'
// const data= JSON.parse(sessionStorage.getItem("user"))
// undefined
// delete data.name;
// true
// sessionStorage.gsetItem("data")
// VM2565:1 Uncaught TypeError: sessionStorage.gsetItem is not a function
//     at <anonymous>:1:16
// (anonymous) @ VM2565:1Understand this error
// sessionStorage.getItem("data")
// null
// sessionStorage.getItem("data",JSON.stringify("data"))
// null
// sessionStorage.setItem("data",JSON.stringify("data"))
// undefined
// sessionStorage.setItem("data",JSON.stringify(data))
// undefined
// sessionStorage.getItem("data")
// '{"age":22}'

////////////////////////////////////////////////////////////////////
// document.cookie("UserName=Sanjay")
// VM247:1 Uncaught TypeError: document.cookie is not a function
//     at <anonymous>:1:10
// (anonymous) @ VM247:1Understand this error
// document.cookie="UserName=Sanjay"
// 'UserName=Sanjay'
// console.log(document.cookie)
// VM383:1 
// undefined
// console.log(document.cookie);
// VM394:1 
// undefined
// console.log(document.cookie);
// VM400:1 
// undefined
// document.cookie="UserName=Sanjay"
// 'UserName=Sanjay'
// console.log(document.cookie);
// VM418:1 
// undefined
// document.cookie = "age=21"; expires=Wed, 12-Mar-2026 12:00:00 UTC;
// VM646:1 Uncaught SyntaxError: Unexpected numberUnderstand this error
// document.cookie = "age=21; expires=Wed, 12 Mar 2026 12:00:00 UTC";
// 'age=21; expires=Wed, 12 Mar 2026 12:00:00 UTC'
// document.cookie = "age=21; path=/";
// 'age=21; path=/'

axios.interceptors.response.use(
  response => {
    console.log("Response received:", response.status);
    return response; 
  },
  error => {
    console.error("Error in response:", error.message);
    return Promise.reject(error);
  }
);
axios.get("http://jsonplaceholder.typicode.com/users",{
    timeout:2000
}).then(res=>console.log(res.data)
).catch(err=>console.error(err))


const users = [
  { name: "Sanjay", age: 23 },
  { name: "Rahul", age: 25 }
];
console.table(users);

// Regex pattern 
// email validation

const pattern = "sanjay@gmail.com"
const resPat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
console.log(resPat.test(pattern));
const str = "Hello my Name is Sanjay from Chennai";
console.log(str.match(/\b[A-Z][a-z]*\b/g));





