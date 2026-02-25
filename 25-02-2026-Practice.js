console.log("25-02");

// Object 

const student ={
    name:"Sanjay",
    age: 21,
    course: "Azure Devops",
    intro(){
        console.log(`My name is ${this.name} and my age is ${this.age} my course is ${this.course}`);
        }
}

student.intro();

const products={
    prodName:["Bat", "Ball", "Stump"]
}
console.log(products.prodName[0]);
console.log(products); //  { prodName: [ 'Bat', 'Ball', 'Stump' ] }

// Object and array destructure

const {prodName}= products

console.log(prodName); // [ 'Bat', 'Ball', 'Stump' ]


const cart={
    id:1,
    name:"Wheel",
    price:200,
    quantity: 3,
    increase(){
        return this.quantity++;
    }
}
cart.increase()
console.log(cart.increase());

// Without this keyword to access the properities.

//A constructor is just a function called using the new keyword.

function updateName(name){
    const obj={};
    obj.name=name;
    obj.introduce= function(){
        console.log(`Hi my name is ${this.name}`);
    }
    return obj;
}

const myname = new updateName("Sanjay");
myname.introduce();

// without using constructor to call like normal function.
const myname1 = updateName("Ram");
myname1.introduce();


// Password checks using objects

const user={
    email:"sanjay@gmail.com",
    password:1234,
    isLogin(value){
        return value===this.password;
    }
}

console.log(user.isLogin(1234));

const order = {
  orderId: 101,
  customer: "Sanjay",
  items: [
    { name: "Watch", price: 2000 },
    { name: "Shoes", price: 3000 }
  ],
  total() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
};

console.log(order.total());

const account ={
    holder:"Sanjay",
    balance:8000,
    deposit(amount){
        return this.balance+=amount;
    },
    withdraw(amount){
        return  this.balance-=amount;
    }
}

console.log(account.deposit(3000));

console.log(account.withdraw(2000));


//Bracket notation is especially useful when the property name is stored in a variable

const cat ={
    name:"Cat",
    age:8,
    colour:"Red",
}
cat.colour="black"
const catName = cat["name"];
console.log(catName);
console.log(cat.colour);


// class is a blueprint or template for creating objects with shared properties and methods. 

// Classes and constructor

//constructor assigns data during object creation
class Account {
    accHolderName;

    constructor(accHolderName){
        this.accHolderName=accHolderName;
    }

    show(){
        console.log(` This account is ${this.accHolderName} created`);
        
    }
}

const account1= new Account("Sanjay");
account1.show();


// Omitting constructor
//creates an empty default constructor
class Account1 {
    accHolderName;
    show(){
        console.log(` This account is ${this.accHolderName} created`);
        
    }
}

const account2= new Account1("Sanjay");
account1.show();

// Inheritance


class IceCream{
    iceName

    constructor(iceName){
        this.iceName=iceName;
    }

    show(){
        console.log(`This icecream is ${this.iceName}`);
        
    }
}

class ConeType extends IceCream{
   constructor(type,iceName){
    super(iceName);
    this.type=type;

   }
}

const iceCream= new ConeType("Cone","strawberry");
iceCream.show();


// Encapsulation
class BankAccount {
  #balance = 0;   

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance());

// Object Prototype

// Every obj has in-built property is called as prototype.

// Object.create

const person = {
  greet() {
    console.log(`Hello ${this.name}`);
  }
};

const students = Object.create(person);
students.name = "Sanjay";

students.greet(); 

// student does not copy greet
// it inherits via prototype chain

const object1={
    name:"Sanjay",

}

const object2={
    age:21
}

const result = Object.assign({},object1,object2);

console.log(result);

// Object.seal and object.freeze.

// const studentInfo={
//     name:"Sanjay",
//     age:23,
//     EmpType:"trainee"
// }

// const update=Object.seal(studentInfo);

// studentInfo.age = 24;
// console.log(update);

// Object.Freeze  but nested object we can modify values.

const studentInfo={
    name:"Sanjay",
    age:23,
    empType:{domain:"Trainee"}
}

const update=Object.freeze(studentInfo);

studentInfo.age = 24;
studentInfo.empType.domain="Insurance";
console.log(update);


const obj = {
  name: "Sanjay",
  address: { city: "Chennai" }
};

Object.freeze(obj);

obj.address.city = "Madurai";  
console.log(obj);


// JSON data

const jsonData=[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]

const conversion = JSON.stringify(jsonData);  // Object to JSON String
console.log(conversion);

console.log(JSON.parse(conversion)); // JSON String to Object

// Practice

const data={
    name:"Sanjay",
    email:"sanjay@gmail.com",
    role:"admin",
    isAdmin(){
        return this.role==="admin";
    }
}

console.log(data.isAdmin());

const object = {product:"Watch",qty:2,price:2000};
console.log(JSON.stringify(object));


class Bank{
    #balance;

    constructor(initailBalance){
        this.#balance= initailBalance;
    }
    deposit(amount){
        if(amount>0){
            this.#balance+=amount;
        }
    }
    withdraw(amount){
        if(amount <= this.#balance && amount>0 ){
            this.#balance-=amount;
        }
    }

    getBalance(){
        return this.#balance;
    }

}

const bankWork= new Bank(100);
bankWork.deposit(300);
bankWork.withdraw(100);

console.log(bankWork.getBalance());

///////////////////////////////////////////////////////

class Person{
    name;
    constructor(name){
        this.name=name;
    }
    introduce(){
        console.log(`My name is ${this.name}`);
        
    }
}
    class Employee extends Person{
        salary;
        constructor(name,salary){
            super(name);
            this.salary=salary
        }
        showSalary(){
            console.log(` My salary is ${this.salary}`);
            
        }
    
}

const details = new Employee("Sanjay",20000);
details.introduce();
details.showSalary();

////////////////////////////////////////////////////////////

function User(name){ 
    this.name = name; 
} 

User.prototype.role="user";


const users = new User("Sanjay");

console.log(users.name);
console.log(users.role);

////////////////////////////////////////////////////////////
const parent = {
  greet(){ console.log("Hello"); }
};

const child = {
  name:"Sanjay"
};

child.__proto__ = parent;

child.greet();





















