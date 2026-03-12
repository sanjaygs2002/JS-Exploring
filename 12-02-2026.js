// const customers = [
// {
// id:1,
// name:"Sanjay",
// city:"Chennai",
// orders:[
//    {product:"Laptop",price:80000,quantity:1,category:"Electronics"},
//    {product:"Mouse",price:500,quantity:2,category:"Electronics"},
//    {product:"Keyboard",price:1500,quantity:1,category:"Electronics"}
// ]
// },
 
// {
// id:2,
// name:"Rahul",
// city:"Mumbai",
// orders:[
//    {product:"Shoes",price:3000,quantity:1,category:"Fashion"},
//    {product:"Tshirt",price:1000,quantity:3,category:"Fashion"},
//    {product:"Cap",price:800,quantity:2,category:"Fashion"}
// ]
// },
 
// {
// id:3,
// name:"Priya",
// city:"Bangalore",
// orders:[
//    {product:"Mobile",price:20000,quantity:1,category:"Electronics"},
//    {product:"Headphones",price:2000,quantity:2,category:"Electronics"}
// ]
// },
 
// {
// id:4,
// name:"Arun",
// city:"Chennai",
// orders:[
//    {product:"Watch",price:5000,quantity:1,category:"Fashion"},
//    {product:"Laptop",price:90000,quantity:1,category:"Electronics"}
// ]
// },
 
// {
// id:5,
// name:"Neha",
// city:"Delhi",
// orders:[
//    {product:"Tablet",price:30000,quantity:1,category:"Electronics"},
//    {product:"Shoes",price:4000,quantity:2,category:"Fashion"}
// ]
// },

// {
// id:6,
// name:"Kiran",
// city:"Hyderabad",
// orders:[
//    {product:"Camera",price:45000,quantity:1,category:"Electronics"},
//    {product:"Tripod",price:3000,quantity:1,category:"Electronics"}
// ]
// }
// ];

// // Build a city wise revenue report
// // Output
// // {
// //  Chennai:170000,
// //  Mumbai:5800,
// //  Bangalore:24000,
// //  Delhi:38000,
// //  Hyderabad:48000
// // }

// const solution = customers.reduce((acc,item)=>{
//    const total= item.orders.reduce((acc,item)=>{
//     return acc+item.price*item.quantity
//    },0)
//      acc[item.city]=(acc[item.city]|| 0) +total
//      return acc
// },{})
// console.log(solution); // based on city wise i can get the total amounts

// const solution1 = customers.reduce((acc,item)=>{
//     let total=0
//     item.orders.forEach((item)=>{
//          total+=item.price*item.quantity
//    })
//      acc[item.city]=(acc[item.city]|| 0) +total
//      return acc
// },{})
// console.log(solution1);

// // Find the average order value per customer
// // Average order value =
// // (total price × quantity) / number of orders
// // Output
// // [
// //  {name:"Sanjay", avgOrderValue: 27333},
// //  {name:"Rahul", avgOrderValue: 1933}
// // ]
// const solution2= customers.map((item)=>{
//     const total= item.orders.reduce((acc,item)=>{
//         return acc+item.price*item.quantity
//     },0)
//     return {
//         name:item.name,
//         avgOrdevalue:total/item.orders.length
//     }
// })
// console.log(solution2);

// const solution4= customers.map((item)=>{
//     return {
//         product:item.orders.map(item=>item.product),
//         quantity:item.orders.reduce((acc,item)=>{
//             return item.quantity<acc.quantity? item:acc
//         },0)
//     }
// })
// console.log(solution4);
const students = [
{
 id:1,
 name:"Sanjay",
 department:"Computer Science",
 subjects:[
   {name:"JavaScript", marks:85},
   {name:"React", marks:90},
   {name:"Node", marks:80}
 ],
 projects:[
   {title:"Ecommerce App", status:"completed"},
   {title:"Chat App", status:"pending"}
 ]
},
{
 id:2,
 name:"Rahul",
 department:"Information Technology",
 subjects:[
   {name:"Java", marks:75},
   {name:"Spring", marks:82},
   {name:"Database", marks:88}
 ],
 projects:[
   {title:"Banking System", status:"completed"}
 ]
},
{
 id:3,
 name:"Priya",
 department:"Computer Science",
 subjects:[
   {name:"Python", marks:92},
   {name:"Machine Learning", marks:95}
 ],
 projects:[
   {title:"AI Chatbot", status:"completed"},
   {title:"Image Classifier", status:"completed"}
 ]
}
];
const new1= students.map(item=>item.name);
console.log(new1);

const new2= students.filter(item=>item.department==="Computer Science").map(item=>item.name);
console.log(new2);

const new3= students.map(item=>{
    return {
        name:item.name,
        subjects:item.subjects.length
    }
})

console.log(new3);

const new4= students.flatMap(item=>item.projects).map(item=>item.title);
console.log(new4);

const new5= students.map(item=>{
    const total= item.subjects.reduce((acc,item)=>{
        return acc+item.marks
    },0)
    return{
        name:item.name,
        avg:total/item.subjects.length
    }
})
console.log(new5);

const new6= students.filter(item=>item.projects.length>1).map(item=>item.name)
console.log(new6);

const new7= students.filter(item=>item.projects.every(item=>item.status==="completed")).map(item=>item.name)
console.log(new7);

const new8 = students.map(item=>{
    return{
        student:item.name,
        subject:item.subjects.filter(item=>item.marks>90).map(item=>item.name)
    }
})
console.log(new8);

const new9= students.map((item)=>{
    const total= item.subjects.reduce((acc,item)=>{
        return acc+item.marks
    },0)
    return{
        name:item.name,
        total:total
    }
})
console.log(new9);
// let totals=0
// const new10= new9.reduce((acc,item)=>{
    
//     if( item.total>totals){
//         totals=item.total
//         acc=item.name
//         // console.log(item.name);
//     }
//     return acc
// },"")
//console.log(new10);


const new10= new9.reduce((acc,item)=>{
    console.log(item);
    return item.total>acc.total?item:acc
}).name
console.log(new10);

const new11=students.reduce((acc,item)=>{ 
    acc[item.department]=(acc[item.department]|| 0)+1 
    return acc;
},{})
console.log(new11);

const new12= students.flatMap(item=>item.projects).filter(item=>item.status==="completed").map(item=>item.title)
console.log(new12);

// Regex pattern
//Email
const regex1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(regex1.test("sanjay@gmail.org"));

const regex2= /\d{10}/
console.log(regex2.test("1234567890"));

const regex3= /^Hello/
console.log(regex3.test("Hello World"));

const pattern = "Today is 12/03/2026"
const regex4= /\b\d{2}\/\d{2}\/\d{4}\b/g;
console.log(regex4.test(pattern));

const pattern1= "1A3F";
const regex5= /^(?=.*[0-9])(?=.*[A-F])[0-9A-F]{4}$/
console.log(regex5.test(pattern1));

const pattern2= "Passw0rd!"
const regex6= /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&]).+$/;
console.log(regex6.test(pattern2));


// Object.assign

const obj1={name:"sanjay"}
const obj2={age:21}
const obj=Object.assign(obj1,obj2)

console.log(obj1);
console.log(obj);

const con= Object.entries(obj)
console.log(con);

// hoc=> function that takes another function as argument or return a function

function calculate(a,b, operation){
    return operation(a,b)
}
function adds(a,b){
    return a+b;
}
console.log(calculate(2,3,adds)); 

// return a function

function add(n){
    return function(a){
        return a+n
    }
}
const number=add(8);
console.log(number(9));













    




