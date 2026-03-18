// // function outer(){
// //   let count=0;
// //   function inner(){
// //     return count++;
// //   }
// //   return inner;
// // }

// // const closure= outer();
// // console.log(closure());
// // console.log(closure());
// // console.log(closure());

// const add=(a,b)=>{
//   return a+b;
// }

// console.log(add(2,5));

// // function processData(){
// //   console.log("Hi");
// // }

// // function getData(name,callback){
// //     console.log(`${name}`)
// //     callback();

// // }

// // getData("Sanjay",processData);

// const nums= [1,2,3,4,5,6,7,8];
// const newres= nums.map(item=>item);

// const even = nums.filter(item=>item%2==0)
// console.log(even);

// const red= nums.reduce((acc,item)=>{
//   return acc+item
// },0)
// console.log(red);

// const fin= nums.some(item=>item===5);
// console.log(fin)

// async function getValues(){
//   try{
//     console.log("Hi")
//   }catch(err){
//     console.log(err);
//   }finally{
//     console.log("Exceuted finished");
//   }
// }

// let promise = new Promise((resolve,reject)=>{
//   let num=8;
//   if(num===8){
//     resolve("Equal");
//   }else{
//     reject("Not Equal")
//   }
// })

// promise.then(res=>console.log(res)).catch(error=>console.log(error));

// class Person{
//   name= "Sanjay"
//   age;

//     Person(age){
//       this.age= age;
//    }
//   greet(){
//     console.log(`${this.name}`);
//   }
// }

// const person = new Person();
// person.greet();

// const students = [
//   ["John", 85, "Math"],
//   ["Sara", 92, "Science"],
//   ["Mike", 70, "History"],
//   ["Anna", 60, "Math"],
//   ["Tom", 95, "Science"]
// ];

// const stu= students.map(item=>item[0])

// const fil= students.every(item=>item[1]>40);

// function getArr(nums){
//     new Set(
//       nums.map(item=>item)
//     )
// }
// console.log(getArr([1,2,3,4,4,3]));



// const stu = students.map((item)=>{
//   const [names,age,subject]= item
//   return{
//     name:names,
//     marks:age,
//     subjects:subject,
//   }
// });

// //const order= students.sort((a,b)=>

// const str="Sanjay";
// const regex= /jay$/

// const num="1234";

// /\d+/

// const str= "1234567890";

// /^[1-5]{1}\d{9}/

const pattern="Learning #javascript and #react today";
const pattern1= /#[A-Za-z]+/g
console.log(pattern.match(pattern1));

const email="Sanjay@gmail.com"

const pattern2= /^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/

console.log(pattern2.test(email));

//OOP
//Encapsulation => hiding the data and methods together to prevent the direct access of the data

class Bank{
    #balanceAccount=0

    constructor(accowner){
        this.accowner=accowner;
    }
    deposit(amount){
        if(amount>0){
            this.#balanceAccount += amount;
        }
    }
    withDraw(amount){
        if(amount<=this.#balanceAccount)
            this.#balanceAccount -= amount;
    }

    getAmount(){
        return this.#balanceAccount;
    }
}

const acc= new Bank("Sanjay");
acc.deposit(1000)
acc.withDraw(200);
console.log(acc.getAmount());

// Inheritance=> Inherits the properties and methods from parent class to sub-class.

class Loan{
    constructor(carLoan,homeLoan){
        this.carLoan=carLoan,
        this.homeLoan=homeLoan
    }
    carL(){
        console.log(`${this.carLoan} this is car loan`)
    }
}

class HomeLoan extends Loan{
    // constructor(carLoan){
    //     super(carLoan)
    // }
    HomeL(){
        console.log(`${this.homeLoan} this is Home loan `)
    }
}

const loan= new HomeLoan(12000,20000);
loan.HomeL();
loan.carL();

// Polymorphism => It is to write the same methods and behaves different in different class

class Phone{
    camera(){
        console.log("Used to take medium pic")
    }
}
class Redmi extends Phone{
    camera(){
        console.log("Taking good pic");
        
    }
}

class IPhone extends Phone{
    camera(){
        console.log("Taking Better Pic");
        
    }
}

const phone= new Phone()
const mi = new Redmi();
mi.camera()
phone.camera()

// Abstraction => It shows only essestial features and hide the implementation details.

class Payment{
    pay(amount){
        console.log("Paying or paid");
        
    }

}
class CreditCard extends Payment{
    pay(amount){
        console.log("Credit card amount paid"+amount);
        
    }
}
class Gpay extends Payment{
    pay(amount){
        console.log("Payment Via Gpay paid"+amount);
        
    }
}
const paying = new CreditCard();
paying.pay(12345)
 
const nums= [1,2,3,4,5,6,7,8];
const newres= nums.filter((item, index)=>index%2==0).map(item=>item*2);
console.log(newres);

// const order= students.sort((a,b)=>b[1]-a[1]);
// console.log(order);

function getDuplicates(nums) {
  return nums.filter((item, index) => nums.indexOf(item) !== index);
}
console.log(getDuplicates([1,2,3,4,4,3]));

// Q: Get total price of completed orders

const users = [
  {
    name: "Sanjay",
    orders: [
      {price: 100, status: "completed"},
      {price: 200, status: "pending"}
    ]
  },
  {
    name: "Rahul",
    orders: [
      {price: 300, status: "completed"}
    ]
  }
]

// cal total price
const total= users.reduce((acc,item)=>{
    item.orders.forEach(item=>{
        acc+=item.price
    })
    return acc;
},0)
console.log(total)

// const arr = ["a","b","c"];
// const ind1= arr.map((item,index,arr)=>{
//     return item+index
// })
// console.log(ind1);

// const arr = [10,20,30];
// const ind2= arr.map((item,index)=>{
//     return index*item;
// })
// console.log(ind2);

// const arr = [5,10,15,20,25];
// const ind3= arr.filter((item,index)=>index%2==0)
// console.log(ind3);

// const arr = ["a","b","c","d"];
// const ind4= arr.map((item,index)=>{
//     if(index%2!==0){
//         return "X"
//     }
//     return item
// })
// console.log(ind4);

const userss = [{name:"Sanjay"},{name:"Rahul"}];
const ind5= userss.map((item,index)=>{
    return {
        name:item.name,
        id:index,
    }
})
console.log(ind5);

// const arr = [10,20,30,40];
// const ind6= arr.reduce((acc,item,index)=>{
//     if(index%2!==0){
//         acc+=item
//     }
//     return acc;
// },0)
// console.log(ind6);

// const arr = [0,2,2,3];
// const ind7= arr.find((item,index)=>index===item)
// console.log(ind7);

// const arr = [1,2,3,4,5,6,7];
// const ind8= arr.filter((item,index)=>{
//     return index%3!==0
// })
// console.log(ind8);


// const arr = ["a","b","c"];
// const ind9= arr.reduce((acc,item,index)=>{
//     acc[index]=item
//     return acc;
// },{})
// console.log(ind9)

const arr = [10,20,30,40,50];

const ind10= arr.reduce((acc,item,index)=>{
    if(index %2===0){
        acc.EvenIndex.push(item)
    }else{
        acc.OddIndex.push(item)
    }
    return acc;
},{EvenIndex:[],OddIndex:[]})
console.log(ind10);

const students = [
  ["John", 85, "Math"],
  ["Sara", 92, "Science"],
  ["Mike", 70, "History"],
  ["Anna", 60, "Math"],
  ["Tom", 95, "Science"]
];

const new1= students.map(item=>item[0]);
console.log(new1);

const new2= students.map((item,index)=>{
    return{
        id:index,
        name:item[0],
        age:item[1],
        subjects:item[2]
    }
})
console.log(new2);

const new3= students.filter((item,index)=>{
    return index%2===0
})
console.log(new3);

const new4= students.reduce((acc,item,index)=>{
    return acc[item[1]]+index
},0)
console.log(new4);

const new5= students.reduce((acc,item,index)=>{
    if(index%2!==0){
        acc[item[1]]="Unknown"
    }
    return acc
},{})
console.log(new5);

const new6= students.reduce((acc,item,index)=>{
    if(index%2!==0){
         acc+=item[1]
    }
    return acc;
},0)
console.log(new6);

// const values= [1,2,3,4,5];
// const rev= values.reverse();
// console.log(rev);

//Reverse only elements at even indexes
const values=[1,2,3,4,5];
const new7= values.filter((item,index,array)=>index%2==0)
const new8= new7.reverse()
console.log(new8);


// Remove Duplicates from array of objects

const products = [
  { id: 1, name: "Watch" },
  { id: 2, name: "Shoes" },
  { id: 1, name: "RRRR" }
];

const new9= [
    ...new Map(
        products.map(item=>[item.id,item])
    ).values()
]
console.log(new9);

// Removing dupicates
const usersss = ["a@gmail.com", "b@gmail.com", "a@gmail.com"];
const res1= [...new Set(usersss)]
console.log(res1);

const visited = new Set();

function visitPage(page){
    if(visited.has(page)){
        console.log("Page has been already visited");
    }else{
        visited.add(page);
        console.log("Visited page");
    }
}
visitPage("Users")
visitPage("Users")
visitPage("Home")

const items = ["apple", "banana", "apple", "orange", "banana"];
const count=new Map();
items.forEach(item => {
    count.set(item,(count.get(item)||0)+1);
});
console.log(count);

const data = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" }
];
const group = new Map();
data.forEach(item=>{
    const key =item.role;
    const arr=group.get(key) ||[];
    arr.push(item)
    group.set(key,arr);
})
console.log(group);
