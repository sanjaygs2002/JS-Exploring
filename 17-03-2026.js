//Practice
const arr1=[1,2,3,4,4,3,2]
const removeDup= new Set(arr1) 
console.log(removeDup);

const str= "javascript"
const newset= new Set(str);
console.log(newset);

const arr2=["a","b","a","c","b","a"]
const grp= new Map();

arr2.forEach(item=>{
    grp.set(item,(grp.get(item)||0)+1)
})
console.log(grp);

function findDuplicates(arr) {
  return [...new Set(arr.filter((item, index) => arr.indexOf(item) !== index))];
}
console.log(findDuplicates([1,2,3,4,4,3,5]));

const strArr= ["hi","hello","hey","world"]

const grpMap= new Map()

strArr.forEach(item=>{
    const key= item.length
    const arr= grpMap.get(key)||[]
    arr.push(item)
    grpMap.set(key,arr)
})
console.log(grpMap);

// Input: [1,2,3,4,5], target = 6
const intArr= [1,2,3,4,5]
const target=6;

function findPair(arr, target) {
for(let i=0;i<intArr.length;i++){
    for(let j=i+1;j<intArr.length;j++){
        if(intArr[i]+intArr[j]===target){
            return [arr[i], arr[j]];
        }
    }
    
}
return null;
}
console.log(findPair(intArr,target));

function Member(name){
    this.name=name
}
Member.prototype.greet=function(){
    console.log(`${this.name} Welcome`);
}
const member= new Member("Sanjay")
member.greet();

// /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]){8,}$/

const pattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}$/

const check= "Sanjay@7542"
console.log(pattern.test(check));











