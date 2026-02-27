export const api= fetch("http://jsonplaceholder.typicode.com/users");


export const mul=(a,b)=>{
    return a*b;
}

export const div=(a,b)=>{
    return a/b;

}


export default class Person {
  constructor(name) {
    this.name = name;
  }
  getName(){
    return `My name is ${this.name}`;
  }
}