const arr1= [1,2,3,4,5,6]
const new1= arr1.filter((item,index)=>index%2==0).map(item=>item*2);
console.log(new1);

const arr2=["Sanjay", "Rahul"]
const new2= arr2.map(item=>{
    return{
        name:item
    }
})
console.log(new2);

// const students = [
//   {name:"Sanjay", marks:[80,90,70]},
//   {name:"Rahul", marks:[60,75,85]}
// ]
// const new3= students.map(item=>{
//     return{
//         name:item.name,
//         totalMarks:item.marks.reduce((acc,item)=>{
//             return acc+item;
//         },0)
//     }
// })
// console.log(new3);

const students = [
  {name:"Sanjay", subjects:["Math","Science"]},
  {name:"Rahul", subjects:["English","Math"]}
]

const new4= students.flatMap(item=>item.subjects)
console.log(new4);

const cart = [
  {name:"Watch", price:1000, qty:2},
  {name:"Phone", price:5000, qty:1}
]
const new5= cart.reduce((acc,item)=>{
    return acc+item.price*item.qty
},0)
console.log(new5);

const arr3=["watch","phone","watch","laptop"]
const new6 = [
    ...new Set(
        arr3.map(item=>item)
    )
]
console.log(new6);

const arr4= [1,[2,[3,[4]]]]
const new7= arr4.flat(3)
console.log(new7);

// class User{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     login(){
//         console.log(`Name is ${this.name} and age is ${this.age}`);    
//     }
// }
// const user = new User("Sanjay",23)
// user.login();
// Encapsulation

class User{
    #password
    constructor(password){
        this.#password= password
    }
    getPassword(){
        console.log(`Password is ${this.#password}`);
    }
}

const user= new User("Sanj5275");
user.getPassword();

class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary
    }
    getDetails(){
        console.log(`${this.name} and ${this.salary}`);
    }
}
class Manager extends Employee{
    constructor(name,salary,teamSize){
        super(name,salary)
        this.teamSize=teamSize
    }
    // override
    getDetails(){
        console.log(`${this.name} and ${this.salary} and ${this.teamSize}`);
    }
}
const manage= new Manager("Sanjay",34567,5);
const manage1= new Employee("Ram",57252)
manage.getDetails()
manage1.getDetails()


class Shape{
    area(){
        console.log("Area");
        
    }
}

class Circle extends Shape{
    constructor(value){
        super()
        this.value=value
    }
    area(){
        console.log(`${this.value}`);
    }
}
class Rectangle extends Shape{
    constructor(l,b){
        super()
        this.l=l;
        this.b=b;
    }
    area(){
        console.log(`${this.l}* ${this.b}`);
        
    }
}
const circle= new Circle(45);
circle.area()
const rect= new Rectangle(5,7);
rect.area();

const a=[1,2,3] 
const b=[2,3,4]

const new8 = a.filter(item=>b.includes(item))
console.log(new8);

const str1= "This is is a test Test";
const new9= [...new Set(str1.split(" "))]
console.log(new9.join(" "));

const words = str1.toLowerCase().split(" ");

const new10= [...new Set(words.filter((item,index,array)=>array.indexOf(item)!==index))]
console.log(new10);

const arr5= [1,2,2,3,3,3]
const grpMap= new Map()
arr5.forEach(item=>{
    grpMap.set(item,(grpMap.get(item)||0)+1)
})
console.log(grpMap);

// Grouping category
const products = [
  {name:"Watch", category:"Electronics"},
  {name:"Shirt", category:"Clothing"}
];
const map= new Map()
products.forEach(item=>{
    if(!map.has(item.category)){
        map.set(item.category,[])
    }
    map.get(item.category).push(item.name)
})
console.log(map);

const arr = new Int8Array([10,20,30]);

console.log(arr);

const newMap=new Map()
newMap.set("name","Sanjay");
newMap.clear()
console.log(newMap);
const arrr = [10, 20, 30];

const iterator = arrr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const obj= {
    name:"Sanjay",
    age:21,
    address:{
        city:"TN"
    }
}

const newObj= {...obj}

newObj.address.city="DL"
console.log(obj);
console.log(newObj);

// const arr = [1, [2, 3], [4, [5, 6]], 7];
// const result= arr.flat(2).reduce((acc,item)=>{
//   return acc+item
// },0);
// console.log(result)

// const arr1= [1,2,3,4,5,6,7,8];
// const array= arr1.map((item,index)=>{
//   if(index%2==0){
//     return item*2;
//   }
//   return item;
// })
// console.log(array)

// const arr2= [1,2,2,4,5,5,7,8];
// const newRes= [...new Set(arr2.filter((item,index)=> arr2.indexOf(item)!== index))]
// console.log(newRes)

// const users = [
//   { name: "John", age: 20 },
//   { name: "Jane", age: 21 },
//   { name: "Jack", age: 20 },
//   { name: "Jill", age: 22 }
// ];

// const new1= users.reduce((acc,item)=>{
//   acc[item.age]=acc[item.age]||[];
//   acc[item.age].push(item)
//   return acc;
// },{})
// console.log(new1)

const arr = [1, 3, 2, 3, 4, 3, 2, 1, 3];

const sol= arr.reduce((acc,item)=>{
  acc[item]=(acc[item]||0)+1

  return acc;
},{})
console.log(sol);

const sol1= Object.entries(sol).reduce((acc,[key,value])=>{
  return value>acc[1] ?[key,value]: acc;
})
console.log(sol1[0])

// const sol1= new Map(sol);
// const map= sol1


const arr3= [1,2,3,4,5,6];

const ite= arr3[Symbol.iterator]()

// console.log(ite.next()); 
// console.log(ite.next()); 
// console.log(ite.next()); 
// console.log(ite.next()); 
// console.log(ite.next()); 
// console.log(ite.next()); 
// console.log(ite.next()); 
// console.log(ite.next()); 

function* data(){
   yield 1;
   yield 2
}
const generate= data();
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());

class Person{
    constructor(name,age){
      this.name= name;
      this.age=age;
    }
  getDetails(){
    console.log(`name is ${this.name} and his age is ${this.age}`)
  }
}

const person = new Person("Sanjay",23)
person.getDetails();

