// // console.log("03-03-2026");

// // // async function data(){
// // //     try{
// // //         const api= await fetch("http://dummyjson.com/users");
// // // //         const res = await api.json();
// // // //         console.log(res);
        
// // // //     }catch(err){
// // // //         console.log("Error",err);
        
// // // //     }
// // // // }

// // // // data();

// // // // Array method question and string method question

// // // const orders = [
// // //   { id: 1, user: "Sanjay", amount: 200 },
// // //   { id: 2, user: "Kumar", amount: 500 },
// // //   { id: 3, user: "Sanjay", amount: 300 },
// // //   { id: 4, user: "Arun", amount: 700 },
// // // ];

// // // const totRev= orders.reduce((acc,item)=>{
// // //     if(acc[item.user]){
// // //         acc[item.user]+=item.amount;
// // //     }else{
// // //         acc[item.user]=item.amount;
// // //     }
// // //     return acc;
// // // },{});

// // // console.log(totRev);


// // // const products = [
// // //   { id: 1, name: "Laptop", price: 80000 },
// // //   { id: 2, name: "Mobile", price: 20000 },
// // //   { id: 3, name: "TV", price: 60000 },
// // // ];

// // // const products1= {...products}; // rest operator to destructure
// // // console.log(products1);

// // // const expPrd=products.reduce((max,item)=>item.price> max.price? item: max);  
// // // console.log(expPrd);


// // // // Group emp by dept
// // // const employees = [
// // //   { name: "A", dept: "IT" },
// // //   { name: "B", dept: "HR" },
// // //   { name: "C", dept: "IT" },
// // //   { name: "D", dept: "Finance" },
// // // ];

// // // const grpEmp=employees.reduce((acc,item)=>{
// // //     const {name,dept}=item;
// // //     // if(!acc[dept]){
// // //     //     return acc;
// // //     // }
// // //     // if(acc[dept]){
// // //     //     acc[dept]=[];
// // //     // acc[dept].push(name);
// // //     // }
// // //     // return acc;

// // //     if(!acc[dept]){
// // //         acc[dept]=[];
// // //         acc[dept].push(name);
// // //         return acc;
// // //     }
// // //     if(acc[dept]){
// // //         acc[dept].push(name);
// // //     }
// // //     return acc;
// // // },{})

// // // console.log(grpEmp);

// // // const students = [
// // //     { id: 1, name: "Sam", marks: [80, 70, 90], city: "Chennai" },
// // //     { id: 2, name: "Ram", marks: [60, 50, 40], city: "Madurai" },
// // //     { id: 3, name: "Sree", marks: [100, 90, 95], city: "Chennai" },
// // //     { id: 4, name: "John", marks: [35, 45, 30], city: "Salem" },
// // //     { id: 4, name: "John", marks: [70, 75, 64], city: "Salem" },
// // //   ];

// // //   //Get all students from Chennai

// // // const getStu = students.filter((cities =>cities.city==="Chennai")).map((nam)=>nam.name);
// // // console.log(getStu);


// // // // Add new field averageMarks to each student

// // // const newFil= students.map(student=>{
// // //     const total = student.marks.reduce((acc,item)=>acc+item,0);
// // //     const avg= total / student.marks.length;
// // //     return {...student, Average:avg};
// // // })
// // // console.log(newFil);




// // // const products = [
// // //   { id: 1, name: "Laptop", price: 50000, category: "Electronics", stock: 10 },
// // //   { id: 2, name: "Phone", price: 20000, category: "Electronics", stock: 0 },
// // //   { id: 3, name: "Shirt", price: 1500, category: "Clothes", stock: 50 },
// // //   { id: 4, name: "Shoes", price: 3000, category: "Clothes", stock: 5 },
// // // ];
 

// // // // Get product names where stock = 0

// // // const stoPrd=  products.filter((sto)=>sto.stock===0).map((nam)=>nam.name);
// // // console.log(stoPrd);


// // // const matrix = [
// // //   [1, 2, 3],
// // //   [4, 5, 6],
// // //   [7, 8, 9],
// // // ];

// // // const res= matrix.flat();
// // // console.log(res);


// // /////////////////////////////////////////////////////////////////////

// // // const employees = [
// // //   {
// // //     id: 1,
// // //     name: "Alice Johnson",
// // //     email: "alice@example.com",
// // //     skills: ["JavaScript", "React", "Node.js"],   // array field
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Bob Smith",
// // //     email: "bob@example.com",
// // //     skills: ["Python", "Django", "Machine Learning"],   // array field
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "Charlie Brown",
// // //     email: "charlie@example.com",
// // //     skills: ["Java", "Spring Boot", "Microservices"],   // array field
// // //   },
// // // ];

// // // const solution= employees.filter(item=>
// // //         item.skills.some(skill=>skill.toLowerCase().includes("java"))
// // // ).map(nam=>nam.name);

// // // console.log(solution);

// // // const solution1= employees.reduce((nam,item)=>{
// // //     const res= item.skills.every(skill=>skill.toLowerCase().includes("java"))
// // //     if(res)
// // //     nam.push(item.name)

// // //     return nam;
// // // },[])

// // // console.log(solution1);




// // const students = [
// //     { id: 1, name: "Sam", marks: [36,22,11], city: "Chennai" },
// //     { id: 2, name: "Ram", marks: [60, 50, 40], city: "Madurai" },
// //     { id: 3, name: "Sree", marks: [100, 90, 95], city: "Chennai" },
// //     { id: 4, name: "John", marks: [35, 45, 30], city: "Salem" },
// //     { id: 4, name: "John", marks: [70, 75, 64], city: "Salem" },
// //   ];

// // // Get students who passed (average ≥ 50)

// // const avg= students.filter(student=>{
// //     const totol = student.marks.reduce((acc,item)=>acc+ item,0);
// //     const average= totol / student.marks.length;
// //      if(average>=50)
// //         return true;
    
// // })

// // console.log(avg);



// // // Find highest mark student
// // const studentsWithAvg = students.map(student => { 
// //     const total = student.marks.reduce((acc, mark) => acc + mark, 0); 
// // const avg = total / student.marks.length; 
// // return { ...student, averageMarks: avg }; 

// // });

// // const topStu=studentsWithAvg.reduce((max,student)=>{
// //     return student.averageMarks > max.averageMarks ? student: max;
// // })

// // console.log(topStu);


// // const omit = students.filter((item)=> item.id!=1);
// // console.log(omit);













// // const orders = [
// //   {
// //     id: 1,
// //     user: "Sam",
// //     items: [
// //       { name: "Pen", price: 10, qty: 2 },
// //       { name: "Book", price: 100, qty: 1 },
// //     ],
// //   },
// //   { id: 2, user: "Ram", items: [{ name: "Bag", price: 500, qty: 1 }] },
// // ];



// // const arr=[1,2,3,4,5];
// // console.log(arr);

// // const map= arr.filter((num,index,array)=>num%2==0);
// // console.log(map);

// // const reduce = arr.reduce((acc,num)=> acc+num,0);
// // console.log(reduce);



// // let mypromise = new Promise((resolve,reject)=>{
// //     let value=9;
// //     if(value===9){
// //         resolve("Equal");
// //     }else{
// //         reject("Not equal");
// //     }
// // })

// // mypromise.then((res)=>{
// //     console.log(res);
    
// // }).catch((err)=>{
// // console.log(err);

// // })

// // const object ={
// //     name:"Sanjay",
// //     age: 23,
// //     domain:"Insurance",
// // }

// // const {name,age, ...bvfdcfvgb}=object;
// // console.log(`my name ${name}`);



// // function data(){
// //     setTimeout(()=>{
// //         console.log("Data");
        
// //     },2000);
// // }

// // data();

// // function datas(){
// //    const id= setInterval(()=>{
// //         console.log("setInterval");
        
// //     },2000);


// // setTimeout(()=>{
// //     clearInterval(id);
// //     console.log("stopped");
    
// // },3000)

// // }

// // datas();

// // const employees = [
// //   {
// //     id: 1,
// //     name: "Alice Johnson",
// //     email: "alice@example.com",
// //     skills: ["JavaScript", "React", "Node.js"],   // array field
// //   },
// //   {
// //     id: 2,
// //     name: "Bob Smith",
// //     email: "bob@example.com",
// //     skills: ["Python", "Django", "Machine Learning"],   // array field
// //   },
// //   {
// //     id: 3,
// //     name: "Charlie Brown",
// //     email: "charlie@example.com",
// //     skills: ["Java", "Spring Boot", "Microservices"],   // array field
// //   },
// // ];

// // const [{id,...remains},{email,...remain},{...all}]=employees;
// // console.log(id);

// // console.log(remains);
// // console.log(remain);
// // console.log(all);

// // employees.forEach((item)=>{
// //     console.log(Object.keys(item));
    
// // })


// // // Call / apply and bind

// // function msg(content){
// //         console.log(this.name + content);
        
// // }
// // const perName= {
// //     name:"Sanjay"
// // }
// // msg.call(perName,"Content");

// // msg.apply(perName,["Apply content"]);

// // const print =  msg.bind(perName,"Binding");
// // print();


// // const user = {
// //   name: "Sanjay",
// //   greet: function () {
// //     console.log(this.name);
// //   }
// // };

// // const greetFunction = user.greet.bind(user);
// // greetFunction(); 



// // Event loop
// console.log("Process1");

// Promise.resolve("Promises").then(value => console.log(value));

// console.log("Process2");

// setTimeout(() => console.log("setTimeout"), 1000);


const students= [{
    id:1,name:"Sanjay", result:"pass",subject:["English", "Maths", "Computer Science"]
    
},
{
        id:2,name:"Ram", result:"Fail",subject:["English", "Maths", "Computer Science"]

},
{
            id:3,name:"Ram", result:"Fail",subject:["English", "Maths", "Computer Science"]

}
]

const result = students.filter((item)=>item.result==="pass");
console.log(result);

const solution = students.filter((item)=>item.name==="Ram").map((item)=>item.id);
console.log(solution);

// const same= students.reduce((acc,item)=>{
//     if(item.name){
//         acc[item.name].push(item.id)

//     }
//     return {StudentId:acc,StudentName:item};
// },[])


const reduce = students.reduce((acc,item)=>{
    if(item.name === "Ram"){
        if(!acc["Ram"]){
        acc["Ram"]=[];
        }
          acc["Ram"].push(item);
    }
    return acc;

},{})

console.log(reduce);


































