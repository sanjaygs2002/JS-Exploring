// const arr = [
//   { id: 1, name: "test user1", price: 20, fruit: ["apple", "mango"] },
//   { id: 2, name: "test user2", price: 60, fruit: ["apple", "grapes"] },
//   { id: 3, name: "test user3", price: 40, fruit: ["mango", "grapes"]  },
// ]

// const getname= arr.map((item)=>{
//    return  {
//     userName:item.name
//    }})
// console.log(getname[0].userName);

// const sol= arr.filter(item=>
//     item.fruit.includes("apple") && item.price>50)

// console.log(sol);

// const res= arr.reduce((acc,item)=>{

//     acc[item.fruit]=(acc[item.fruit] || 0)+1
    
//     return acc;
// },{});

// console.log(res);

// const result = arr.reduce((acc,item)=>{
//     item.fruit.forEach((item)=>{
//         acc[item]= (acc[item]||0)+1
       
//     })
//  return acc;
// },{})
// console.log(result);


// const fruitInventory = [
//   {
//     fruitName: "Apple",
//     price: 2.5,
//     quantity: 120,
//     details: [
//       { supplier: "Farm Fresh", region: "India", rating: 4.5 },
//       { supplier: "Orchard Co.", region: "Mali", rating: 4.7 }
//     ]
//   },
//   {
//     fruitName: "Banana",
//     price: 1.2,
//     quantity: 200,
//     details: [
//       { supplier: "Tropical Ltd.", region: "Mali", rating: 4.2 },
//       { supplier: "Banana World", region: "Ecuador", rating: 4.6 }
//     ]
//   },
//   {
//     fruitName: "Mango",
//     price: 3.0,
//     quantity: 75,
//     details: [
//       { supplier: "Sunny Farms", region: "India", rating: 4.8 },
//       { supplier: "Golden Harvest", region: "Mexico", rating: 4.4 }
//     ]
//   },
//   {
//     fruitName: "Orange",
//     price: 2.0,
//     quantity: 150,
//     details: [
//       { supplier: "Citrus Valley", region: "India", rating: 4.3 },
//       { supplier: "Sunshine Co.", region: "Spain", rating: 4.5 }
//     ]
//   }
// ];

// const new1 = fruitInventory.reduce((acc,item)=>{
//       item.details.forEach((item)=>{
//         acc[item.region]=acc[item.region]||[];
//         acc[item.region].push(item.supplier);
        
//       })
//       return acc;
// },{});
// console.log(new1);

// const new2= fruitInventory.reduce((acc,item)=>{
//     item.details.forEach((item)=>{
//         acc[item.region]=acc[item.region]||[];
//         acc[item.region].push(item.rating)
        
//     })
//     return acc;
// },{})
// console.log(new2);

// // const resset = Object.entries(new2).reduce((acc, [country, ratings]) => {

// //   const total = ratings.reduce((sum, r) => sum + r, 0);

// //   acc[country] = total / ratings.length;

// //   return acc;

// // }, {});

// // console.log(resset);
// console.log(Object.entries(new2));


// const results={};
// const resset = Object.entries(new2).forEach(([country,list])=>{
    
//     const a=list.reduce((acc,item)=>{
//         return acc+item
        
//     },0)/list.length;
//     results[country]=a;

// })
// console.log(results);

// //Question - Practice

// const sol1= fruitInventory.reduce((acc,item)=>{
//    return  acc+item.quantity;
// },0);
// console.log(sol1);

// const sol2= fruitInventory.flatMap(item=>
//     item.details.filter(item=>
//         item.region=="India").map(item=> item.supplier)
// )

// console.log(sol2);

// const sol3 = fruitInventory.flatMap(item =>
//   item.details.map(detail => detail.supplier)
// );

// console.log(sol3);


// const sol4= fruitInventory.reduce((acc,item)=>{
//     return item.quantity>acc.quantity?item:acc;
// })

// console.log(sol4);

// const sol5= fruitInventory.reduce((acc,item)=>{
//     return acc+ item.price* item.quantity;
// },0)

// console.log(sol5);

// const arrr = [1, [2, 3], [4, [5, 6]]];
// const a=arrr.flat(2);      
// console.log(a);

// const flat= fruitInventory.flatMap((item)=>{
//     return item.details
// })
// console.log(flat);

const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 80000,
    rating: 4.5,
    tags: ["tech","computer"]
  },
  {
    id: 2,
    name: "Mobile",
    category: "Electronics",
    price: 20000,
    rating: 4.2,
    tags: ["phone","tech"]
  },
  {
    id: 3,
    name: "Shoes",
    category: "Fashion",
    price: 3000,
    rating: 4.1,
    tags: ["footwear"]
  },
  {
    id: 4,
    name: "Watch",
    category: "Fashion",
    price: 5000,
    rating: 4.6,
    tags: ["accessory"]
  },
  {
    id: 5,
    name: "Headphones",
    category: "Electronics",
    price: 2500,
    rating: 4.3,
    tags: ["audio","tech"]
  }
];

const sol1= products.map((item)=>{
    return item.name
})
console.log(sol1);

const sol2 = products.filter((item)=>{
   return  item.price>5000;
}).map((item)=>{
   return  item.name;
})
console.log(sol2);

const sol3= products.filter((item)=>{
    return item.category==="Electronics"
}).map((item)=>item.name);

console.log(sol3);

const sol4= products.reduce((acc,item)=>{
    return item.price>acc.price? item:acc;
})
console.log({name:sol4.name, Price:sol4.price});

const sol5=products.reduce((acc,item)=>acc+item.rating,0)/products.length
console.log(sol5);

const sol6= products.reduce((acc,item)=>{
    acc[item.category]=(acc[item.category]||0)+1
    return acc;
},{})
console.log(sol6);

const sol7= products.flatMap((item)=>{
    return item.tags;
})
console.log(sol7);

const remDup= [
    ...new Set(
        products.flatMap((item)=>{
            return item.tags;
        })
    )
]

console.log(remDup);

const sol8= products.filter((item)=> item.rating>4.3).map((item)=>{
    return item.name;
})
console.log(sol8);

// const sol9= products.reduce((acc,item)=>{
//    return acc+item.price;
// },0)
// console.log(sol9);

const sol9= products.filter((item)=>{
    return item.category.includes("Electronics")
}).reduce((acc,item)=>{
    return acc+item.price;
},0);
console.log(sol9);

const sol10= products.sort((a,b)=>a.price-b.price).map(item=>item.name);
console.log(sol10);

const sol11 = products.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = { sum: 0, count: 0 };
  }

  acc[item.category].sum += item.rating;
  acc[item.category].count += 1;

  return acc;
}, {});

console.log(sol11);

const sol13= [
    ...new Set(
        products.flatMap((item)=>{
           return  item.tags
        })
    )
]
console.log(sol13);


const sol14= products.reduce((acc,item)=>{
    item.tags.forEach((item)=>{
        acc[item]=(acc[item]||0)+1
    })
    return acc;
},{})
console.log(sol14);

const sol15= products.filter((item)=>{
    return item.tags.includes("tech")
}).map((item)=>{
    return item.name;
})
console.log(sol15);




























