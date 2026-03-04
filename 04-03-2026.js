// // Practice
// const orders = [
//   {
//     orderId: 101,
//     customer: "Sanjay",
//     items: [
//       { product: "Laptop", price: 60000, quantity: 1 },
//       { product: "Mouse", price: 500, quantity: 2 }
//     ],
//     status: "Delivered"
//   },
//   {
//     orderId: 102,
//     customer: "Arun",
//     items: [
//       { product: "Keyboard", price: 1500, quantity: 1 },
//       { product: "Mouse", price: 500, quantity: 1 }
//     ],
//     status: "Pending"
//   },
//   {
//     orderId: 103,
//     customer: "Sanjay",
//     items: [
//       { product: "Monitor", price: 12000, quantity: 1 },
//       { product: "Keyboard", price: 1500, quantity: 1 }
//     ],
//     status: "Delivered"
//   }
// ];

// const allCus= orders.map((item)=>item.customer);
// console.log(allCus);

// const allPro= orders.reduce((acc,item)=>{
//     return acc.concat(item.items.map((item)=>item.product));
// },[])
// console.log(allPro);


// const set= [
//     ...new Set(
//         orders.reduce((acc,item)=>{
//             return acc.concat(item.items.map((item)=>item.product))
//         },[])
//     )
// ]

// console.log(set);

// const getOrders= orders.filter((item)=>item.customer==="Sanjay")
// console.log(getOrders);


// const find=orders.find((person)=>person.orderId===101).items.reduce((acc,item)=>{
//     return acc+item.price*item.quantity;
// },0)

// console.log(find);

// const allorder= orders.map((item)=>item.items);
// console.log(allorder);

// const statuss = orders.reduce((acc,item)=>{
//     if(!acc[item.status]){
//         acc[item.status]=[];
//         acc[item.status].push(item);
//     }
//     return acc;
// },{})

// console.log(statuss);


// const totalRev= orders.filter((item)=>item.status==="Delivered").reduce((acc,item)=>{
//     const total=item.items.reduce((acc,item)=>{
//         return acc+ item.price*item.quantity;
//     },0)
//     return acc+total
// },0)

// console.log(totalRev);

// const students = [
//   {
//     id: 1,
//     name: "Sanjay",
//     courses: [
//       { course: "JavaScript", score: 85 },
//       { course: "React", score: 90 }
//     ],
//     city: "Chennai"
//   },
//   {
//     id: 2,
//     name: "Arun",
//     courses: [
//       { course: "JavaScript", score: 70 },
//       { course: "Node", score: 75 }
//     ],
//     city: "Bangalore"
//   },
//   {
//     id: 3,
//     name: "Priya",
//     courses: [
//       { course: "React", score: 88 },
//       { course: "Node", score: 92 }
//     ],
//     city: "Chennai"
//   }
// ];

// const sol1 = students.map((item)=>item.name);
// console.log(sol1);

// const sol2 = students.filter((item)=>item.city==="Chennai");
// console.log(sol2);

// const sol3= students.reduce((acc,item)=>{
//     return acc.concat(item.courses.map((item)=>item.course));
// },[])
// console.log(sol3);

// const sol4= [
//     ...new Set(
//         students.reduce((acc,item)=>{
//             return acc.concat(item.courses.map((item)=>item.course))
//         },[])
//     )
// ]

// console.log(sol4);

// // const sol5=students.reduce((acc,item)=>{
// //     if(item.name==="Sanjay"){
// //         const total=item.courses.reduce((tot,course)=>tot+course.score,0)
// //         return total
// //     }
// //         // return acc+ item.courses.map((item)=>item.score);
    
// //    return acc;
// // },0)

// // console.log(sol5);


// const sol6 = students.reduce((acc,item)=>{
//     if(item.city){
//         acc[item.city]=(acc[item.city]|| 0)+1
//     }
//     return acc;
// },{})

// console.log(sol6);

// const total= students.reduce((acc,item)=>{
//     const total=item.courses.reduce((tot,course)=>tot+course.score,0);
//     acc[item.name]=total;
//     return acc;
// },{})
// console.log(total);


// const sol8 = students.filter(item=>
//      item.courses.some((item)=>item.course==="React")

// )
// console.log(sol8);


// // [{
// //     id: 3,
// //     name: "Priya",
// //     courses: [
// //       { course: "React", score: 88 },
// //       { course: "Node", score: 92 }
// //     ],
// //     city: "Chennai"
// //   }
// // ];



// const sam= students.reduce((acc,item)=>{
//    item.courses.map((course)=>{
//     acc[course.course] = (acc[course.course] || 0) + course.score
//    })
 

//    return acc;
// },{})
// console.log(sam);




// // normal vs arrow function

// function add(){
//     return a+b  ////////////
// }
// add(3,7)

// const add =()=>{
//     return a+b;
// }


// //primitive => immutable
// // Non- primitive mutable

// // Local vs session 

// const arr=[1,2,3,4];
// const res=[...arr,2,5];

// const [a,...rest]=arr;
// console.log(res);

// const b = { name: 'Kamali', address: {city: 'Namakkal', pin: '123456'}};

// const c={...b};
// console.log(c);

// // splice




const students = [
  {
    id: 1,
    name: "Sanjay",
    courses: [
      { course: "JavaScript", score: 85 },
      { course: "React", score: 90 }
    ],
    city: "Chennai"
  },
  {
    id: 2,
    name: "Arun",
    courses: [
      { course: "JavaScript", score: 70 },
      { course: "Node", score: 75 }
    ],
    city: "Bangalore"
  },
  {
    id: 3,
    name: "Priya",
    courses: [
      { course: "React", score: 88 },
      { course: "Node", score: 92 }
    ],
    city: "Chennai"
  }
];




const obj1= [
    {id:1,category :"Electronic",productName:"Laptop",price:{mrp:300,discount:"10%"}},
    {id:2,category :"Clothes",productName:"Laptop",price:{mrp:300,discount:"10%"}},
    {id:3,category :"Clothes",productName:"Laptop",price:{mrp:300,discount:"10%"}},
    {id:4,category :"Electronic",productName:"Laptop",price:{mrp:300,discount:"10%"}},
]



obj1.forEach((item)=>{
    console.log(Object.values(item));
})

obj1.forEach((item)=>{
    console.log(Object.keys(item));   
})

obj1.forEach((item)=>{
    console.log(Object.entries(item));
})
const user = {
  id: 1,
  name: "Sanjay",
  age: 21,
  city: "Chennai"
};



// Object Merge

const merge= Object.assign(obj1,user);  // output come like this
// {
//   '0': {
//     id: 1,
//     category: 'Electronic',
//     productName: 'Laptop',
//     price: { mrp: 300, discount: '10%' }
//   },
//   '1': {
//     id: 2,
//     category: 'Clothes',
//     productName: 'Laptop',
//     price: { mrp: 300, discount: '10%' }
//   },
//   '2': {
//     id: 3,
//     category: 'Clothes',
//     productName: 'Laptop',
//     price: { mrp: 300, discount: '10%' }
//   },
//   '3': {
//     id: 4,
//     category: 'Electronic',
//     productName: 'Laptop',
//     price: { mrp: 300, discount: '10%' }
//   },
//   id: 1,
//   name: 'Sanjay',
//   age: 21,
//   city: 'Chennai'
// }
console.log(merge);

const obj3 = {a:1};
const obj2 = {b:2};

const result = Object.assign( obj3, obj2);

console.log(result);


const create= Object.create(user);
console.log(create.age);

const object = Object.freeze(obj1);


console.log(object);

const seal = Object.seal(obj1);

obj1[1].price.mrp = 600; 
console.log(obj1);

const person = {
  name: "Sanjay",
  greet: function() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

person.greet();

// const id=setInterval(()=>{
//     console.log("Interval");
    
// },1000);

// setTimeout(()=>{
//     clearInterval(id);
// },2000)

// New Object for Practice

const users = [
  {
    id: 1,
    name: "Sanjay",
    age: 22,
    address: { city: "Chennai", pincode: 600001 },
    skills: ["JavaScript", "React", "HTML"]
  },
  {
    id: 2,
    name: "Arun",
    age: 25,
    address: { city: "Bangalore", pincode: 560001 },
    skills: ["Java", "Spring", "SQL"]
  },
  {
    id: 3,
    name: "Priya",
    age: 24,
    address: { city: "Chennai", pincode: 600002 },
    skills: ["JavaScript", "Angular", "CSS"]
  }
];

const new1 = users.filter(item=>item.skills.includes("JavaScript"));

console.log(new1);

const new2= users.filter((item)=>item.address.city==="Chennai").map((item)=>item.name);
console.log(new2);

const new3= users.reduce((acc,item)=>{
    acc[item.address.city]=(acc[item.address.city]|| 0)+1;
    return acc;
},{})

console.log(new3);

const employees = [
  {
    id: 1,
    name: "Sanjay",
    department: "IT",
    salary: 50000,
    projects: ["Ecommerce", "Dashboard"],
    address: { city: "Chennai", country: "India" }
  },
  {
    id: 2,
    name: "Arun",
    department: "HR",
    salary: 30000,
    projects: ["Recruitment"],
    address: { city: "Bangalore", country: "India" }
  },
  {
    id: 3,
    name: "Priya",
    department: "IT",
    salary: 60000,
    projects: ["Banking", "MobileApp"],
    address: { city: "Hyderabad", country: "India" }
  },
  {
    id: 4,
    name: "Karthik",
    department: "Finance",
    salary: 40000,
    projects: ["Audit"],
    address: { city: "Chennai", country: "India" }
  }
];

const a1= employees.flatMap((item)=>item.projects);
console.log(a1);

const a2= employees.reduce((acc,item)=>{
    acc[item.department]=acc[item.department]|| [];
    acc[item.department].push(item.name);
    return acc;
},{});

console.log(a2);

const a3 = employees.reduce((acc,item)=>{
    acc[item.address.city]= (acc[item.address.city] || 0)+1
    return acc;
},{})
console.log(a3);

///////////////////////////////////////////////////////--------/////



































