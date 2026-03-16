const students = [
{
id:1,
name:"Sanjay",
age:22,
department:"CSE",
skills:["JavaScript","React","Node"],
subjects:[
 {name:"Math",marks:85},
 {name:"Programming",marks:92},
 {name:"Database",marks:78}
]
},
{
id:2,
name:"Rahul",
age:23,
department:"ECE",
skills:["C","Embedded","Python"],
subjects:[
 {name:"Math",marks:65},
 {name:"Electronics",marks:80},
 {name:"Signals",marks:70}
]
},
{
id:3,
name:"Priya",
age:21,
department:"CSE",
skills:["JavaScript","Angular","Node"],
subjects:[
 {name:"Math",marks:90},
 {name:"Programming",marks:88},
 {name:"AI",marks:95}
]
},
{
id:4,
name:"Arun",
age:24,
department:"IT",
skills:["Python","Django","SQL"],
subjects:[
 {name:"Math",marks:72},
 {name:"Database",marks:85},
 {name:"Programming",marks:80}
]
}
]

// get the all emp names
const new1= students.map(item=>item.name)
console.log(new1);

const new2= students.filter(item=>item.age>22).forEach(item=>{
    console.log(item.name);
})

const new3= students.filter(item=>item.name==="Priya")
console.log(new3);

const new4= students.map(item=>item.department);
console.log(new4);

const new5= students.some(item=>item.subjects.some(item=>item.marks>90))
console.log(new5)

const new6= students.flatMap(item=>item.skills)
console.log(new6);

//Get students who belong to CSE department
const new7= students.filter(item=>item.department==="CSE").forEach(item=>{
    console.log(item.name);
})

const new8= students.map(item=>{
    return{
          name:item.name,
    totalMarks:item.subjects.reduce((acc,item)=>{
        return acc+item.marks
    },0)
    }
  
})
console.log(new8);

//Get all subject names
const new9= students.flatMap(item=>item.subjects.forEach(item=>{
    console.log(item.name)
}))

// Group students by department
const new10=students.reduce((acc,item)=>{
    acc[item.department]=acc[item.department]||[]
    acc[item.department].push(item.name)
    return acc;
},{})
console.log(new10);

const regex = /^.{5,10}$/
console.log(regex.test("Sanjay"));

// <h1 id="myname">Sanjay</h1>

// document.getElementById("myname").addEventListener("click", function(){
//     alert("Hi this is my name");
// })

//hoc

function add(a,b){
    return a+b;
}
function calculate(a,b,operation){
    return operation(a,b);
}
console.log(calculate(289,897,add));

// Prototype

function Member(name){
    this.name=name
}

Member.prototype.greet=function(){
    console.log(`Hi my name is ${this.name}`)
}

const member= new Member("Sanjay")
member.greet();

// call 

// function value(age,city){
//     return `${this.name} age is ${age} and his city is ${city}; `
// }
// const person={name:"Sanjay"}

// console.log(value.apply(person,[21,"TN"]))

// bind

function value(age,city){
    return `${this.name} age is ${age} and his city is ${city}; `
}
const person={name:"Sanjay"}

const result= value.bind(person,21,"TN")
console.log(result());



//hof
function add(a,b){
    return a+b;
}
function calculate(a,b,operation){
    return operation(a,b);
}

console.log(calculate(2,3,add));











