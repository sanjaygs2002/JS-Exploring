console.log("02-03-2026");

const arr = [
  { id: 1, name: "test user1", price: 20, fruit: ["apple", "mango"] },
  { id: 2, name: "test user2", price: 60, fruit: ["apple", "grapes"] },
  { id: 3, name: "test user3", price: 40, fruit: ["mango", "grapes"]  },
]

//////////////////////////////////////////////////////////////////////////////
const result = arr.filter((item)=>item.fruit.includes("apple") && item.price>50);
console.log(result);

////////////////////////////////////////////////////////////////////////////////
arr.forEach((item)=>{
    console.log(Object.values(item)); 
})

/////////////////////////////////////////////////////////////////////////////
const omit =arr.filter(item => item.id !== 1);
console.log(omit);









