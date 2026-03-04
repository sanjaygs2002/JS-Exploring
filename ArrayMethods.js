const employees = [
  {
    id: 1,
    name: "Sanjay",
    department: "IT",
    salary: 50000,
    skills: ["JavaScript", "React", "Node"],
    experience: 3
  },
  {
    id: 2,
    name: "Arun",
    department: "HR",
    salary: 30000,
    skills: ["Communication", "Recruitment"],
    experience: 2
  },
  {
    id: 3,
    name: "Priya",
    department: "IT",
    salary: 70000,
    skills: ["Java", "Spring"],
    experience: 5
  },
  {
    id: 4,
    name: "Kumar",
    department: "Finance",
    salary: 60000,
    skills: ["Excel", "Accounting"],
    experience: 4
  },
  {
    id: 5,
    name: "Divya",
    department: "IT",
    salary: 45000,
    skills: ["JavaScript", "Angular"],
    experience: 2
  }
];

const ans1=employees.map((item)=>item.name);
console.log(ans1);

const ans2= employees.filter((item)=>item.department==="IT")
console.log(ans2);

const ans4= employees.map((item)=>item.id);
console.log(ans4);

const ans5=employees.reduce((count,item)=>{
    if(item.department==="IT"){
        count++;
    }
    return count;
},0);

console.log(ans5);

const ans6= employees.reduce((acc,item)=>{
    if(!item.salary){
        return acc;
    }
    return acc+ item.salary;
},0)
console.log(ans6);

const ans7 = employees.reduce((max, emp) => {
  return emp.salary > max.salary ? emp : max;
}, employees[0]);
console.log(ans7);

const ans8= employees.map((item)=>item.skills).join(",").split(" ");
console.log(ans8);



const allSkills = employees.reduce((acc, emp) => {
  return acc.concat(emp.skills);
}, []);
console.log(allSkills);

const uniqueskills=[
    ...new Set(
        employees.reduce((acc, emp) => {
  return acc.concat(emp.skills);
    },[])
)]
console.log(uniqueskills);




const users = [
  {
    id: 1,
    name: "Sanjay",
    address: {
      city: "Chennai"
    }
  }
];


const [{name, ...rest}]=users;

console.log(name);
console.log(rest);


const arr1 = [1, 2, 3];
const arr2 = [...arr1,90,0];

console.log(arr2); 



const str = "JS";

const arr = ["Script",...str];

console.log(arr);




