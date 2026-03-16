// Count how many times each  value appears 
const fruits = ["apple","banana","apple","orange","banana","apple"];
const result= fruits.reduce((acc,item)=>{
    acc[item]=(acc[item]|| 0)+1
    return acc
},{})
console.log(result);

// Now I write example of call, apply , bind

// call
// function msg(name,age){
//     console.log(`${this.message} my name is ${name}, age is ${age}`)
// }
// const person={message:"Hi my msg is welcome"};

// msg.call(person,"Sanjay",21);

// // apply 
// function msg(name,age){
//     console.log(`${this.message} my name is ${name}, age is ${age}`)
// }
// const person={message:"Hi my msg is welcome"};

// msg.apply(person,["Sanjay",21]);

// bind
// function msg(name,age){
//     console.log(`${this.message} my name is ${name}, age is ${age}`)
// }
// const person={message:"Hi my msg is welcome"};

// const newFunc= msg.bind(person,"Sanjay",21)
// newFunc();

// callback function is a function passed the argument of the other function and excuted inside that function later.
function getData(name,callback){
    console.log(`${name}`)
    callback();
}
function value(){
    console.log("Hi")
}
getData("Sanjay",value);

// Closure is for variable from the outer function can be access the inner function even after the outer function has finished their execution.

function car(){
    let height=0;
    function inner(){
        return height++;
    }
    return inner;
}
const closure = car();
console.log(closure());
console.log(closure())
console.log(closure())

// HOF => It is function that takes another function as argument or return the function

function add(a,b){
    return a+b
}
function calculate(a,b,operation){
    return operation(a,b);
}
console.log(calculate(2,3,add));

// IIFE => Once we defined the function it can be excuted the immediately
(function (){
    console.log("This is IIFE")
})();

fetch("http://jsonplaceholder.typicode.com/todos/1").
then(res=> res.json()).
then(val=>console.log(val)).
then(sol=>console.log("sol")).
catch(err=>console.log(err));

// Prototype => prototype is object in JavaScript that allows other objects to which 
// inherits the properities and methods.

function Member(name){
    this.name=name;
}
Member.prototype.greet=function(){
    console.log(`Hi ${this.name}`);
}
const member= new Member("Sanjay");
member.greet();
/////////////////////////////////////////////////////////////////////////////////

const employees = [
  {
    id: 1,
    name: "Sanjay",
    department: "IT",
    salary: 60000,
    age: 25,
    skills: ["JavaScript", "React", "Node"],
    projects: [
      { title: "Ecommerce", hours: 120, status: "completed" },
      { title: "Admin Panel", hours: 80, status: "pending" }
    ]
  },
  {
    id: 2,
    name: "Rahul",
    department: "HR",
    salary: 40000,
    age: 30,
    skills: ["Communication", "Management"],
    projects: [
      { title: "Hiring System", hours: 50, status: "completed" }
    ]
  },
  {
    id: 3,
    name: "Priya",
    department: "IT",
    salary: 75000,
    age: 28,
    skills: ["JavaScript", "Angular"],
    projects: [
      { title: "Bank App", hours: 200, status: "completed" },
      { title: "Chat System", hours: 150, status: "completed" }
    ]
  }
]
//Practice
//Get all employee names
const new1= employees.map(item=>item.name);
console.log(new1);

//Get employees whose salary > 50000
const new2= employees.filter(item=>item.salary>50000).forEach(item=>console.log(item.name))

// find the emp whose name is rahul
const new3= employees.find(item=>item.name==="Rahul")
console.log(new3);

const new4= employees.map(item=>item.department);
console.log(new4);

const new5= employees.some(item=>item.salary>70000)
console.log(new5);

// get all skills from emp
const new6= employees.flatMap(item=>item.skills)
console.log(new6);

// Get employees who belong to IT department
const new7= employees.filter(item=>item.department==="IT").map(item=>{
    return{
        name:item.name
    }
});
console.log(new7)

//Get total salary of employees
const new8= employees.reduce((acc,item)=>{
    return acc+item.salary
},0)
console.log(new8)

//Count number of projects for each employee
const new9= employees.map(item=>{
    return{
        name:item.name,
        projects:item.projects.length
    }
})
console.log(new9)

//Get employees who completed all projects
const new10= employees.filter(item=>item.projects.every(item=>item.status==="completed")).map(item=>item.name)
console.log(new10);

// get all completed projects titles
const new11= employees.filter(item=>item.projects.every(item=>item.status==="completed")).flatMap(item=>item.projects.map(item=>item.title))
console.log(new11);


//Get total hours worked by each employee  && Find employee who worked highest hours
const new12= employees.map(item=>{
    return {
        name:item.name,
        totalHours:item.projects.reduce((acc,item)=>{
            return acc+item.hours
        },0)
    }
})
console.log(new12)

const new13= new12.reduce((acc,item)=>{
            return item.totalHours>acc.totalHours?item:acc
        })
    
console.log(new13)

//Group employees by department
const new14= employees.reduce((acc,item)=>{
    acc[item.department]= acc[item.department]||[]
    acc[item.department].push(item.name)
    return acc
    
},{})
console.log(new14)

// const regex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// const regex=/^\d{10}$/

// const regex= /^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/

// const regex= /\#[A-Za-z]/g


























