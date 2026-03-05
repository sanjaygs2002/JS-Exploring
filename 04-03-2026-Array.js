console.log("Array methods");

const users = [
  {
    id: 1,
    name: "Sanjay",
    age: 24,
    city: "Chennai",
    orders: [
      { product: "Laptop", price: 80000, quantity: 1 },
      { product: "Mouse", price: 500, quantity: 2 }
    ],
    skills: ["JavaScript", "React", "CSS"]
  },
  {
    id: 2,
    name: "Arun",
    age: 28,
    city: "Bangalore",
    orders: [
      { product: "Mobile", price: 20000, quantity: 1 },
      { product: "Headset", price: 2000, quantity: 1 }
    ],
    skills: ["JavaScript", "Node", "MongoDB"]
  },
  {
    id: 3,
    name: "Priya",
    age: 22,
    city: "Chennai",
    orders: [
      { product: "Tablet", price: 30000, quantity: 1 }
    ],
    skills: ["HTML", "CSS"]
  },
  {
    id: 4,
    name: "Rahul",
    age: 30,
    city: "Hyderabad",
    orders: [
      { product: "Laptop", price: 90000, quantity: 1 },
      { product: "Keyboard", price: 1500, quantity: 1 }
    ],
    skills: ["Java", "Spring"]
  }
];

const getName= users.map((item)=>item.name);
console.log(getName);

const namCity= users.map((item)=>{
    return {name:item.name,
    city:item.city
    }
})
console.log(namCity);

const newPro= users.map((item)=>{
    return {
        name: item.name,
        age:item.age,
        isAdult: item.age>25
    }
})
console.log(newPro);

const count = users.map((item)=>{
    return{
        name:item.name,
        skillsCount:item.skills.length
    }
})

console.log(count);

const allProducts= users.map((item)=>{
    return {
        name:item.name,
        products: item.orders.map((item)=>item.product)
    }
})

console.log(allProducts);

const knows = users.filter((item)=>item.orders.some((item)=>item.product==="Laptop")).map((item)=>item.name);
console.log(knows);

const totprice= users.reduce((acc,item)=>{
    const tot=item.orders.reduce((acc,item)=>{
        
        return acc+item.price*item.quantity;
    },0)
    return acc+tot;
},0);
console.log(totprice);

const result = users.map(user => {
  const totalSpent = user.orders.reduce((sum, order) => {
    return sum + order.price * order.quantity;
  }, 0);

  return {
    name: user.name,
    totalSpent: totalSpent
  };
});

console.log(result);

const spend= users.map(item=>{
    const tot= item.orders.reduce((acc,item)=>{
        return acc+item.price * item.quantity;
    },0);
    return {
        name:item.name,
        spend:tot>80000
    }
},{})
console.log(spend);

// Prototype

function Person(name) {
  this.name = name;
  this.greet = function() {
    console.log("Hello " + this.name);
  };
}

const p1 = new Person("Sanjay");
const p2 = new Person("Arun");

p1.greet();
p2.greet();

const arr1 = [1, 2, [3, 4]];

const arr2 = [...arr1];

arr2[2][0] = 100;
arr2[0]=50;
console.log(arr1);
console.log(arr2);


const userss = [
 {
  name:"Sanjay",
  orders:[
   {product:"Laptop",price:80000},
   {product:"Mouse",price:500}
  ]
 },
 {
  name:"Rahul",
  orders:[
   {product:"Mobile",price:20000}
  ]
 }
];

const mock1= userss.map((item)=>{
    const tot= item.orders.reduce((acc,item)=>{
        return acc+ item.price
    },0)
    return {
        name:item.name,
        total:tot
    }
},[])

console.log(mock1);

const obj1 = { name: "Alice", details: { 
age: 25 } }; 
const obj2 = { ...obj1 }; 
obj2.details.age = 30; 

console.log(obj1);
console.log(obj2);

















