// const orders = [
//   {
//     orderId: 101,
//     customer: { name: "Alice", city: "Chennai" },
//     items: [
//       { product: "Laptop", price: 60000 },
//       { product: "Mouse", price: 500 }
//     ]
//   },
//   {
//     orderId: 102,
//     customer: { name: "Bob", city: "Bangalore" },
//     items: [
//       { product: "Phone", price: 30000 },
//       { product: "Charger", price: 1000 }
//     ]
//   }
// ];

// const ans1= orders.map((item)=>{
//     return {
//         customers:item.customer.name,
//         totalPrice: item.items.reduce((acc,item)=>{
//             return acc+item.price
//         },0)
//     }
// })
// console.log(ans1);

// const ans2= orders.flatMap(item=>item.items.map(item=>item.product))
// console.log(ans2);

// const ans3= orders.map((item)=>{
//     const total= item.items.reduce((acc,item)=>{
//         return acc+item.price;
//     },0)
//     return{
//         customer:item.customer.name,
//         totalPrice:total
//         }
// }).filter(item=>item.totalPrice>50000)
// console.log(ans3);

// const departments = [
//   {
//     name: "IT",
//     employees: [
//       { id: 1, name: "Arun", salary: 50000 },
//       { id: 2, name: "Meena", salary: 60000 }
//     ]
//   },
//   {
//     name: "HR",
//     employees: [
//       { id: 3, name: "Kiran", salary: 40000 },
//       { id: 4, name: "Divya", salary: 45000 }
//     ]
//   }
// ];

// //{ id: 2, name: "Meena", department: "IT", salary: 60000 }

// const ans4= departments.reduce((acc,item)=>{
//    const total = item.employees.reduce((acc,item)=>{
//    return item.salary>acc.salary?item:acc
//    })
//    return acc;
// }).name

// console.log(ans4);

// const ans6= departments.find(item=>item.name==="IT").employees;
// console.log(ans6);




// const trips = [
//   {
//     tripId: "T1",
//     destination: "Goa",
//     passengers: [
//       { name: "Rahul", age: 25 },
//       { name: "Sneha", age: 22 }
//     ]
//   },
//   {
//     tripId: "T2",
//     destination: "Delhi",
//     passengers: [
//       { name: "Vikram", age: 30 },
//       { name: "Anita", age: 28 }
//     ]
//   }
// ];

// const sol1= trips.find(item=>item.destination==="Goa").passengers
// console.log(sol1);

// const sol2= trips.map(item=>{
//    const total=  item.passengers.reduce((acc,item)=>{
//         return acc+item.age
//     },0)
//     return {
//         avgAge:total/item.passengers.length
//     }
// })
// console.log(sol2);


// //////////////////////////////////////////////////////////////////////////////
// const pattern = "Sanjay123";
// console.log(/[A-Za-z0-9]+/.test(pattern));

// const pat1= "Sanjay@123"
//  const pat2= "12-03-2026"
//  console.log(/^[0-9]{2}-[0-9]{2}-[0-9]{4}$/.test(pat2));
//  console.log(/^[0-9]{2}:[0-9]{2}$/.test("22:99"));
 





