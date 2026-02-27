import {api} from "./Modules/service.js";
import { mul , div} from "./Modules/service.js";
import Person from "./Modules/service.js";

console.log("27-02-2026");



async function getData(){
    console.log("Hi My name is Sanjay");
    return "Done";
}

async function getValues(){
    let a=9;
    if(a===9){
        console.log("Equal");
        
    }else{
        console.log("Not equal");
        
    }
}


async function data(){
    const res = await getData();
    const sol= await getValues();
    
    console.log(res);
    console.log(sol);
    
    
}

data();


// Async in arrow function

const add = async (a,b) =>{return a+b};
add(2,686).then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})

// scoping

//var and let and const

var a="this is var used in above function";


function scope(){
    let b=8;
  
    console.log(a);
    console.log(b);
   
    
    
    
}
scope();


// Extend the parameters handling

// Default parameter

function msg(name){
       name= name || "sanjay";
       console.log(name);
       
}

msg("Ram");

// rest parameter

function sal(...number){
    return number.reduce((a,b)=>a+b,0);
}

console.log(sal(57000,24150,40000));

// spread operator => into seperate elements or values

function operator(a,b,c,d,e){
    return a+b+c+d+e;
}

const nums= [1,2,3,4,5,6,7,8];
console.log(operator(...nums));


// Destructuring arrays and object

function objFormat({name, age}){
    console.log(name,age); 
}

console.log(objFormat({name:"Sanjay",age:45}));

function createUser(
  name = "Guest",
  age = 18,
  ...skills
){
  return {
    name,
    age,
    skills
  };
}

console.log(createUser("Sanjay",25,"JS","React"));



const numbers = [1, 2, 3, 4, 5];
const [f, ...rest] = numbers;

console.log(f);
console.log(rest);


const record= {
    name:"Sanjay",
    age:23,
    address:{
        state:"TN",
        country:"IND",
    }
}

const {address:{state}}= record;
console.log(state);


// Updation will happen or not in while destructure.

const records= {
    name:"Sanjay",
    age:23,
    address:{
        states:"TN",
        country:"IND",
    }
}


const obj2={...records};
console.log(obj2.address.states="AP");

// Practise:

const employees = [{ id: 1, name: 'Alice', active: true, departments: ['HR', 'Finance'] },
{ id: 2, name: 'Bob', active: false, departments: ['Engineering'] },
{ id: 3, name: 'Charlie', active: true, departments: ['Engineering', 'Finance'] },
{ id: 4, name: 'Diana', active: true, departments: ['HR'] }]; 


const result = employees.reduce((acc, emp)=>{
    const {name, active, departments}= emp;

    if(!active)
        return acc;
    
    departments.forEach(dept =>{
        if(!acc[dept]){
           acc[dept]=[]; 
        }
        acc[dept].push(name);


})

return acc;
},{})

console.log(result);


// Modules


async function getApi(){
    const get= await api;
    const sol=get.json();
    console.log(sol);
    
}

console.log(getApi());


// Modules => named export {}

console.log(mul(9,4575));
console.log((div(8,7)));


// default export  by classes example

const p= new Person("Sanjay");
console.log(p.getName());


// typed arrays

const u1=new Uint8Array(9);
console.log(u1);

// public private protected

class Employee {
  #salary;

  constructor(name, salary) {
    this.name = name;       
    this.#salary = salary;   
  }

  getSalary() {
    return this.#salary;
  }
}


class Manager extends Employee {
  constructor(name, salary, teamSize) {
    super(name, salary);  
    this.teamSize = teamSize;
  }

  getInfo() {
    return `${this.name} manages ${this.teamSize} people`;
  }
}

const m = new Manager("Sanjay", 80000, 5);

console.log(m.name);        
console.log(m.getSalary());  
console.log(m.getInfo());    


































































































































