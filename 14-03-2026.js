
if (true) {
  let a = 10;
  const b = 20;
  console.log(a);
  
}

// console.log(a); // ❌ ReferenceError
// console.log(b); // ❌ ReferenceError

console.log(b);
var b= function(){
    console.log("Function expression in var");    
}

// this Binding: Arrow functions do not have their own this binding. 
// Instead, they inherit the this value from the surrounding (lexical) scope where they are defined.

const a = [2, 4, 6];

// Use reduce to calculate the sum
const sum = a.reduce((acc, x)=>{    
return acc + x  
},0) 
console.log(isNaN(sum));

console.log(isNaN("Sanjay"));


// Optional Chaining => used for when the properties not present in the object that instead give error it will give the undefined or null.
// const value= {name:"Sanjay"}
// const res= value.address.city;
// console.log(res);

// deep copy using structured clone

const original = {
  name: 'Alice',
  details: { age: 30, city: 'New York' }
};

const dupli= structuredClone(original)
dupli.details.age=80;
console.log(dupli);
console.log(original);


// A callback function is a function passed as an argument into another function, 
// intended to be executed ("called back") later, typically after an asynchronous 
// operation completes or an event occurs. 

// call

const person= {name:"Sanjay"};
function msg(data){
    console.log(data,"Hi" ,this.name); 
}
msg.call(person,"Hi Telling")

// apply
const greeting={msg:"Welcome to company"}

function identity(name,age){
    console.log(this.msg,"My name is ",name,"age is",age);
}

identity.apply(greeting,["Sanjay",21]);

// const students = [
//   { id: 1, name: "Sanjay", age: 22 },
//   { id: 2, name: "Rahul", age: 24 },
//   { id: 3, name: "Priya", age: 21 }
// ];

//1st

// const students = [
//   { id: 1, name: "Sanjay", age: 22 },
//   { id: 2, name: "Rahul", age: 24 },
//   { id: 3, name: "Priya", age: 21 }
// ];

// const new1= students.map(item=>item.name);
// console.log(new1);

// const new2= students.filter(item=>item.age>22);
// console.log(new2);

// const new3 = students.map(item=>{
//     return{
//         ...item,
//         country:"India"
//     }
// })
// console.log(new3)

const students = [
  { name: "Sanjay", subjects: ["JS","React","Node"] },
  { name: "Rahul", subjects: ["Java","Spring","SQL"] },
  { name: "Priya", subjects: ["Python","Django"] }
];

const new4= students.map(item=>{
    return{
        name:item.name,
        subjects:item.subjects.length
    }
})
console.log(new4);

const new5= students.flatMap(item=>item.subjects);
console.log(new5);

const new6= students.filter(item=>item.subjects.includes("React"))
console.log(new6);

// const employees = [
//   { name: "Sanjay", address: { city: "Chennai", pin: 600001 } },
//   { name: "Rahul", address: { city: "Delhi", pin: 110001 } },
//   { name: "Priya", address: { city: "Mumbai", pin: 400001 } }
// ];

// const new7= employees.map(item=>item.address).map(item=>item.city)
// console.log(new7)  // you do the operation only outside of the methods if its is nested object means

// const new8= employees.filter(item=>item.address.city==="Chennai")
// console.log(new8);

// const employees = [
//   {
//     name: "Sanjay",
//     projects: [
//       { title: "Ecommerce App", status: "completed" },
//       { title: "Chat App", status: "pending" }
//     ]
//   },
//   {
//     name: "Rahul",
//     projects: [
//       { title: "Banking System", status: "completed" },
//       { title: "AI Chatbot", status: "completed" }
//     ]
//   }
// ];

// //get the all completed projects titles

// const new9= employees.flatMap(item=>item.projects.filter(item=>item.status==="completed").map(item=>item.title));
// console.log(new9);

// const new10= employees.filter(item=>item.projects.every(item=>item.status==="completed"));
// console.log(new10)

// const employees = [
//   {
//     name: "Sanjay",
//     projects: [
//       { title: "Ecommerce", hours: 20 },
//       { title: "Chat App", hours: 15 }
//     ]
//   },
//   {
//     name: "Rahul",
//     projects: [
//       { title: "Banking", hours: 30 },
//       { title: "AI", hours: 25 }
//     ]
//   }
// ];

// // Get total worked hours of each emp
// const new11= employees.map(item=>{
//     return{
//         name:item.name,
//         totalHours: item.projects.reduce((acc,item)=>{
//             return acc+item.hours
//         },0)
//     }
// })
// console.log(new11);

// const new12= new11.reduce((acc,item)=>{
//     return item.totalHours>acc.totalHours?item:acc
// })
// console.log(new12);

// const company = [
//   {
//     department: "IT",
//     employees: [
//       { name: "Sanjay" },
//       { name: "Rahul" }
//     ]
//   },
//   {
//     department: "HR",
//     employees: [
//       { name: "Priya" },
//       { name: "Anjali" }
//     ]
//   }
// ];

// const new13= company.reduce((acc,item)=>{
//     acc[item.department]=item.employees.map(item=>item.name)
//     return acc;
// },{})
// console.log(new13);

// const new14= company.flatMap(item=>item.employees.flatMap(item=>item.name))
// console.log(new14)

// const new15= company.find(item=>item.employees.some(item=>item.name==="Rahul")).department
// console.log(new15);

const company = [
{
 department:"IT",
 employees:[
   {name:"Sanjay", salary:50000},
   {name:"Rahul", salary:60000}
 ]
},
{
 department:"HR",
 employees:[
   {name:"Priya", salary:40000},
   {name:"Anjali", salary:45000}
 ]
}
]
 
const new16= company.map(item=>{
    return{
        department:item.department,
        totalSalary:item.employees.reduce((acc,item)=>{
            return acc+item.salary
        },0)
    }
})
console.log(new16);

const new17= company.flatMap(item=>item.employees).reduce((acc,item)=>{
    return item.salary>acc.salary?item:acc
})
console.log(new17)


