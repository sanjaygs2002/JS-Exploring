// const fruits = 
// ["apple","banana","apple","orange","banana","apple"]; 
// const solution = fruits.reduce((acc,item)=>{
//     acc[item]=(acc[item]||0)+1
//     return acc
// },{})
// console.log(solution);

// [{"name":"Sanjay"}]

// const products = [
//  {name:"Watch", price:2000},
//  {name:"Phone", price:15000},
//  {name:"Laptop", price:60000}
// ];

// const solution1= products.reduce((acc,item)=>{
//     return item.price>acc.price?item:acc
// })
// console.log(solution1);

// const nums = [10,20,30,40,0];
// const num= nums.every(item=>item>=0)
// console.log(num);

// const students = [
//  {name:"Sanjay", subjects:["Math","Science","English"]},
//  {name:"Rahul", subjects:["Math","Physics"]},
//  {name:"Priya", subjects:["English","Biology","Chemistry"]}
// ];

// const solution2 = students.map(item=>{
//     return {
//         name:item.name,
//         subjects:item.subjects.length
//     }
// })

// console.log(solution2);

// const users = [
// {
//  name:"Sanjay",
//  projects:[
//    {title:"Ecommerce",status:"completed"},
//    {title:"Banking",status:"pending"}
//  ]
// },
// {
//  name:"Rahul",
//  projects:[
//    {title:"AI Chatbot",status:"completed"}
//  ]
// }
// ];

// const user= users.flatMap(item=>item.projects.map(item=>item.title))
// console.log(user);

// const employees = [
//  {name:"Sanjay", dept:"IT"},
//  {name:"Rahul", dept:"HR"},
//  {name:"Priya", dept:"IT"},
//  {name:"Kumar", dept:"HR"}
// ];

// const emp= employees.reduce((acc,item)=>{
//     acc[item.dept]= acc[item.dept] || []
//     acc[item.dept].push(item.name)
//     return acc
// },{})
// console.log(emp);

// const regex="12-03-2026";
// const pattern=/^\d{2}-\d{2}-\d{4}$/
// console.log(pattern.test(regex));

// const arr = [[1,2],[3,4],[5,6]];
// console.log(arr.flat());

// // promise

// let value= new Promise((resolve,reject)=>{
//     let a=8;
//     if(a===8){
//         resolve("Equal")
//     }else{
//         reject("Not equal")
//     }
// })

// value.then(res=>console.log(res)
// ).catch(err=>console.log(err))

// const pattern1= "Learning #JavaScript and #React";
// const regex1= /#[A-Za-z]+/g
// console.log(pattern1.match(regex1));


const employees = [
{
name:"Sanjay",
department:"IT",
projects:[
{title:"Ecommerce App", hours:120, status:"completed"},
{title:"Chat App", hours:80, status:"pending"}
]
},
{
name:"Rahul",
department:"Finance",
projects:[
{title:"Banking System", hours:150, status:"completed"},
{title:"Payment Gateway", hours:60, status:"completed"}
]
},
{
name:"Priya",
department:"AI",
projects:[
{title:"AI Chatbot", hours:200, status:"completed"},
{title:"Image Classifier", hours:180, status:"completed"}
]
}
];

// M
const new1= employees.map(item=>{
    return{
        name:item.name,
        totalHours: item.projects.reduce((acc,item)=>{
           return acc+item.hours
        },0)
    }
})
console.log(new1);

const new2= employees.flatMap(item=>item.projects).filter(item=>item.status==="completed").map(item=>item.title)
console.log(new2);

//Get employees who completed all projects.

const new3= employees.filter(item=>item.projects.every(item=>item.status==="completed"))
console.log(new3);

const new4= employees.reduce((acc,item)=>{
    return acc+item.projects.length
},0)
console.log(new4);

const companies = [
{
name:"Google",
employees:[
{
name:"Sanjay",
skills:["JS","React","Node"],
salary:70000
},
{
name:"Rahul",
skills:["Java","Spring"],
salary:80000
}
]
},
{
name:"Microsoft",
employees:[
{
name:"Priya",
skills:["Python","AI"],
salary:90000
},
{
name:"Arjun",
skills:["JS","Angular"],
salary:75000
}
]
}
];

// get the emp name 
const new5= companies.flatMap(item=>item.employees.map(item=>item.name))
console.log(new5);
// get the emp details who knows the JS => skills
const new6= companies.flatMap(item=>item.employees.filter(item=>item.skills.includes("JS")))
console.log(new6);

// get the company wise emp count
const new7= companies.map(item=>{
    return{
        name:item.name,
        count:item.employees.length

    }
})
console.log(new7);
// return object which means get the emp highest salary
const new8= companies.flatMap(item=>item.employees).reduce((acc,item)=>{
    return item.salary>acc.salary?item:acc;
})

console.log(new8);

//count how many emp know each skill.
const new9= companies.flatMap(item=>item.employees)
                    .flatMap(item=>item.skills)
            .reduce((acc,item)=>{
                acc[item]=(acc[item]||0)+1
                return acc
            },{})
console.log(new9);

function handle(greet){
    console.log(greet,this.name);
    
}
const rem={name:"sanjay"}
handle.call(rem,"Welcome")

// Object Prototype

function Member(name){
    this.name=name;     // this is a constructor functions
}
Member.prototype.greet= function(){
    console.log(`my name is ${this.name}`);
}
const member1= new Member("Sanjay")
member1.greet();

// Destructuring 
const [{name,...rest},...rests]= companies;
console.log(rests);
console.log(name);
console.log(rest)

// Array method
// regex pattern
// destructuring
// closure
// Higher order function
// call, apply,Bind
// callback
// typeArray
// Promise
// async and await

let promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
         fetch("http://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err))
    },1000)
})
promise.then(res=>console.log(res)
).catch(err=>console.log(err)
)
















