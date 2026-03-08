console.log("07-03");

const users = [
{
  id:1,
  name:"Sanjay",
  age:22,
  city:"Chennai",
  orders:[
    {product:"Laptop",price:80000,category:"Electronics"},
    {product:"Mouse",price:500,category:"Electronics"}
  ]
},

{
  id:2,
  name:"Rahul",
  age:25,
  city:"Mumbai",
  orders:[
    {product:"Mobile",price:20000,category:"Electronics"},
    {product:"Headset",price:2000,category:"Electronics"}
  ]
},

{
  id:3,
  name:"Priya",
  age:23,
  city:"Bangalore",
  orders:[
    {product:"Tablet",price:30000,category:"Electronics"},
    {product:"Laptop",price:90000,category:"Electronics"}
  ]
}
];

const sol3= users.map((item)=>{
    return item.orders.reduce((acc,item)=>{
        return acc+ item.price
    },0)
   
})

console.log(sol3);

const sol4= users.flatMap((item)=>{
    return item.orders
})
console.log((sol4));

const sol5= users.map((item)=>{
    return {
        names:item.name,
    items:item.orders.filter((item)=>{
        return item.price>50000
    })}

})
console.log(sol5);

const sol6= users.map((users)=>{
    return {
        name:users.orders.flatMap((user)=>{
            return user.product
        })
    }
})

console.log(sol6);

const result = users
.flatMap(user => user.orders)
.reduce((sum,order)=> sum + order.price,0);
console.log(result);


const employees = [
{
  id:1,
  name:"Sanjay",
  department:"IT",
  salary:50000,
  skills:["JavaScript","React","Node"],
  projects:[
    {name:"Ecommerce",budget:200000},
    {name:"Dashboard",budget:100000}
  ]
},

{
  id:2,
  name:"Rahul",
  department:"HR",
  salary:40000,
  skills:["Communication","Recruitment"],
  projects:[
    {name:"HiringSystem",budget:50000}
  ]
},

{
  id:3,
  name:"Priya",
  department:"IT",
  salary:70000,
  skills:["JavaScript","Angular"],
  projects:[
    {name:"CRM",budget:150000},
    {name:"Analytics",budget:120000}
  ]
},

{
  id:4,
  name:"Anu",
  department:"Finance",
  salary:60000,
  skills:["Excel","Accounting"],
  projects:[
    {name:"Audit",budget:80000}
  ]
}
];

const getName = employees.map((user)=>{
    return user.name
})
console.log(getName);

const getEmp= employees.filter((item)=>{
    return item.department==="IT"
})
console.log(getEmp);

const allSkills= employees.flatMap((item)=>{
    return item.skills
})

console.log(allSkills);

const totSal= employees.reduce((acc,item)=>{
    return acc+item.salary
},0)
console.log(totSal);

const totBudget= employees.flatMap(item=>
    item.projects).reduce((acc,item)=>{
        return acc+item.budget
    },0)
console.log(totBudget);

const empSal= employees.filter((item)=>item.salary>50000).map((item)=>{
    return item.name
})
console.log(empSal);

const allPro= employees.flatMap(item=>item.projects).map(item=>item.name)
console.log(allPro);

const high = employees.reduce((acc,item)=>{
    return item.salary>acc.salary?item:acc
})
console.log(high);

const java= employees.filter(item=>item.skills.includes("JavaScript")).map(item=>item.name);
console.log(java);


const students = [
{
 id:1,
 name:"Sanjay",
 age:22,
 course:"Fullstack",
 marks:[
   {subject:"JS",score:90},
   {subject:"React",score:85},
   {subject:"Node",score:80}
 ],
 skills:["HTML","CSS","JavaScript"]
},

{
 id:2,
 name:"Rahul",
 age:23,
 course:"Frontend",
 marks:[
   {subject:"JS",score:70},
   {subject:"React",score:75},
   {subject:"CSS",score:88}
 ],
 skills:["HTML","CSS"]
},

{
 id:3,
 name:"Priya",
 age:21,
 course:"Fullstack",
 marks:[
   {subject:"JS",score:95},
   {subject:"Node",score:90},
   {subject:"MongoDB",score:85}
 ],
 skills:["JavaScript","Node","MongoDB"]
},

{
 id:4,
 name:"Arun",
 age:24,
 course:"Backend",
 marks:[
   {subject:"Node",score:78},
   {subject:"MongoDB",score:80},
   {subject:"Express",score:82}
 ],
 skills:["Node","Express"]
}
];

const new1= students.map(item=>item.name)
console.log(new1);

const new2= students.filter(item=>item.course==="Fullstack").map(item=>item.name);
console.log(new2);

const new3= students.flatMap(item=>item.marks).reduce((acc,item)=>{
    acc[item.score]=(acc[item.score]|| 0)+1;
    return acc;
})
console.log(new3);

const new4= students.flatMap(item=>item.skills);
console.log(new4);



const new5= students.flatMap(item=>item.marks).reduce((acc,item)=>{
    return item.score>acc?item.score:acc;
},0)
console.log(new5);

const new6 = students.filter(item=>item.skills.includes("JavaScript")).map(item=>item.name);
console.log(new6);

const new7= students.filter(item=>item.marks.some(item=>item.score>90)).map(item=>item.name);
console.log(new7);

const new8= students.flatMap(item=>item.skills)
console.log(new8);

const new9= students.reduce((acc,item)=>{
  acc[item.course]=(acc[item.course]|| 0)+1;
  return acc;
},{})
console.log(new9);

const new10= students.flatMap(item=>item.skills).length;
console.log(new10);

const new11= students.flatMap(item=>item.marks).filter(item=>item.score>85);
console.log(new11);

const new12= students.map((item)=>{
  return {
    name:item.name,
    skill:item.skills.length
  }
})
console.log(new12);

const new13= students.filter(item=>item.skills.length>2).map(item=>item.name)
console.log(new13);

const new14= students.flatMap(item=>item.marks).filter(item=>item.score>20)
console.log(new14.reduce((acc,item)=>{
    return acc+item.score
},0));

const new15= students.flatMap(item=>item.marks).reduce((acc,item)=>{
  acc[item.subject]=(acc[item.subject]|| 0)+1;
  return acc;
},{})
console.log(new15);












