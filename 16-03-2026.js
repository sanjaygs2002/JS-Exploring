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
            this.#balanceAccount-= amount;
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
    HomeL(){
        console.log(`${this.homeLoan} this is car loan`)
    }
}

const loan= new HomeLoan(12000,20000);
loan.HomeL();

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






































