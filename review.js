// console.log("02-03-2026");

const arr = [
  { id: 1, name: "test user1", price: 20, fruit: ["apple", "mango"] },
  { id: 2, name: "test user2", price: 60, fruit: ["apple", "grapes"] },
  { id: 3, name: "test user3", price: 40, fruit: ["mango", "grapes"]  },
]

// //////////////////////////////////////////////////////////////////////////////
// const result = arr.filter((item)=>item.fruit.includes("apple") && item.price>50);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////
arr.forEach((item)=>{
    console.log(Object.values(item)); 
})

// /////////////////////////////////////////////////////////////////////////////
// const omit =arr.filter(item => item.id !== 1);
// console.log(omit);

// async function item(){
//     console.log("Data fetching");
    
// }



// // async function data(){
// //     try{
// //         const items = await item();
// //         const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
// //         const res = await response.json();
// //         console.log(items);
        
// //         console.log(res);
// //     }catch(err){
// //         console.log("Error", err);
// //     }
// // }

// // data();



// // fetchData()
// //   .then(res => process(res))
// //   .catch(err => console.log(err));


// async function fetchData(){
//     try{
//             const res= await fetchData();
//             process(res)
//     }catch(err){
//         console.log(err);
        
//     }
// }
// fetchData();

// const mypromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Result");
        
        
//     },2000)

// })

// callBack

function call(callback){
    
        console.log("Fetching");
        callback();
    
}

function productName(){
    console.log("name process");
    
}

call(productName);


function outer(){
    let count =1;
    return function(){
        count++;
        console.log(count);
        
    }
}

let item = outer();
item();


// Practice

const add = (a,b)=> a+b;

const adds=(a,b)=>{
    return a+b
}
console.log(add(6,8));



const employees = [
  { id: 1, name: "Alice", age: 28, salary: 50000, active: true, dept: "HR" },
  { id: 2, name: "Bob", age: 35, salary: 70000, active: false, dept: "Engineering" },
  { id: 3, name: "Charlie", age: 30, salary: 60000, active: true, dept: "Engineering" },
  { id: 4, name: "Diana", age: 40, salary: 90000, active: true, dept: "Finance" }
];

//Get all employee names

const allEmp= employees.map((item) => item.name);
console.log(allEmp);

// Get only active employees

const actEmps=employees.filter((item)=>item.active===true);
console.log(actEmps);

// Get first employee from Engineering

const firstEmp= employees.find((item)=>item.dept==="Engineering");
console.log(firstEmp);

// Increase salary by 10% for all active employees

const incEmp = employees.filter((item)=>item.active).map((item)=>({...item, Salary:item.salary+10}));
console.log(incEmp);

// Get total salary of all employees

const totSal= employees.reduce((sum,item)=>sum+item.salary,0);
console.log(totSal);

//Group employees by department

const grpEmp = employees.reduce((acc,item)=>{
    if(!acc[item.dept]){
        acc[item.dept]=[];
    }
    acc[item.dept].push(item);
    return acc;
},{});

console.log(grpEmp);

// {
//   HR: ["Alice"],
//   Engineering: ["Charlie"],
//   Finance: ["Diana"]
// }

const group = employees.reduce((acc,item)=>{
    const {name, dept,active}= item;

    if(!active)
        return acc;
    if(!acc[dept]){
        acc[dept]=[];
    }
    acc[dept].push(name);
    return acc;
},{})

console.log(group);

///////////////////////////////////////////////////////////////////////////////////////////

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 800,
    tags: ["electronics", "computer"],
    reviews: [5, 4, 4]
  },
  {
    id: 2,
    name: "Phone",
    price: 500,
    tags: ["electronics"],
    reviews: [4, 3]
  },
  {
    id: 3,
    name: "Shirt",
    price: 50,
    tags: ["clothing"],
    reviews: [5, 5, 4]
  }
];

// destructure

products.forEach((item)=>{
    console.log(Object.values(item));
    
})

// Get unique tags

const uniTag= products.filter((item)=>item.tags);
console.log(uniTag);

const students = [
  {
    name: "John",
    marks: { math: 80, science: 70, english: 90 }
  },
  {
    name: "Sara",
    marks: { math: 60, science: 85, english: 75 }
  }
];

const totmark = students.reduce((acc,item)=>acc+(item.marks.science+item.marks.english+item.marks.math));
console.log(totmark);

// Alternate solutions
const altSol= students.map(item=>({name:item.name, marks:item.marks.science+item.marks.english+item.marks.math}));
console.log(altSol);


async function sol1(){
    setTimeout(()=>{
console.log("solution1");
    },1000)
    
    
}

async function sol2(){
    console.log("solution2");
    
}



async function data(){
    try{
        const value1 = await sol1();
     const value2 = await sol2();
    }catch(err){
        console.log("Error",err);
        
    }
}
data();





























