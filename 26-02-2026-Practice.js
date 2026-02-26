// console.log("26-02-2026");

// // Synchronous 

// // function data1(){
// //     console.log("This is data1");
// // }
// // data1();

// // function data2(){
// //     setTimeout(()=>{
// // console.log("This is data2");
// //     },1000)
// // }  
// // data2();

// // async function data3(){
// // setTimeout(()=>{
// // console.log("This is data3");
// // },3000)
    
// // }
// // data3();

// // function data4(){
// //     console.log("This is data4");
// // }
// // data4();

// // using callback

// function data(num,callback){
//     const value = num+1;
// callback(value);
// }

// function data1(num,callback){
//     const value = num+2;
// callback(value);
// }

// function data2(num,callback){
//     const value = num+3;
// callback(value);
// }

// function calculation(){
//     data(0,(num1) =>{
//         data1(num1,(num2)=>{
//             console.log(`Result : ${num2}`);
            
//         })
//     }
// )}

// calculation();

// // Promise 

// const apiurl = fetch(  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

// console.log(apiurl);


// apiurl.then((result) => {
//     console.log(`Data: ${result.status}`);
    
// }).catch((err) => {
//     console.log("Error in fetching",err);
    
// });

// // const mypromise = new Promise((resolve, reject) => {
// //   fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
// //     .then(response => response.json())
// //     .then(data => resolve(data))
// //     .catch(error => reject(error));
// // });

// // mypromise
// //   .then(result => console.log(result))
// //   .catch(err => console.log(err));


// // Promise => all, allSettled, race, any

// // Promise.all

// // const promise1=Promise.resolve(20);
// // const promise2= Promise.resolve(30);
// // const promise3 = Promise.resolve(10);
// // const promise4 = Promise.reject(67);


// // Promise.all([promise1,promise2,promise3,promise4])
// // .then((result) => {
// //     console.log(result);
    
// // }).catch((err) => {
// //     console.log(err);
    
// // });

// // Promise.allSettled

// const promise1=Promise.resolve(20);
// const promise2= Promise.resolve(30);
// const promise3 = Promise.resolve(10);
// const promise4 = Promise.reject(67);

// Promise.allSettled([promise1,promise2,promise3,promise4])
// .then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);

// })

// // Promise.race

// // const mypromise = new Promise((resolve, reject) => {
// //     setTimeout(()=>{
// //     fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
// //     .then(response => response.json())
// //     .then(data => resolve(data))
// //     .catch(error => reject(error));
// //     },2000)
  
// // });

// // mypromise
// //   .then(result => console.log(result))
// //   .catch(err => console.log(err));

// //   const mypromise1= new Promise((resolve)=>{
// //     setTimeout(()=>{
// //         resolve("Sanjay myname");
// //     },1000)
// //   })

// // .then((result) => {
// //     console.log(result);
    
// // }).catch((err) => {
// //     console.log(err);
    
// // });

// // const res= Promise.race([mypromise,mypromise1])
// // .then((result) => {
// //     console.log(result);
    
// // }).catch((err) => {
// //     console.log(err);
    
// // });

// // Promise.any 


// const p1 = Promise.reject("Fail1");
// const p2 = Promise.resolve("Success");
// const p3 = Promise.reject("Fail2");

// Promise.any([p1, p2, p3])
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// // Async and await

// async function data(){
//     try{
//         const payload={name:"Sanjay"};
//         const convention = await Promise.resolve(payload);
//         console.log(convention);
        
//     }catch{
//         console.log("Error will happen");
        
//     }
// }

// data()

// // setTimeout and setInterval

// function examTime(){
//     console.log("Exam will start");
//     setTimeout(()=>{
//         console.log("Exam will end");
        
//     },5000);
// }

// examTime()

// // SetInterval

// function clock(){
//     console.log("Remainder is start");
//     setInterval(()=>{
//         console.log("Snooze every at 5 seconds");
        
//     },5000)
    
// }

// clock();


// // clearTimeout

// setTimeout(()=>{
//     clearInterval(clock);
// },2000);



// const 














const promise= new Promise((resolve, reject)=>{
    const data=6;
    if(data>=7){
        resolve("the num is greater than 7");
    }else{
        reject("Not greater");
    }
})

promise.then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})


async function data(){
    try{
        let num=2;
        if(num===2){
            console.log("Equal");
            
        }else{
            console.log("not equal");
            
        }
    }catch{
        console.log("Error occurs in the code");
        
    }
}



class Bank{
    account;
    constructor(account){
        this.account= account;
    }
    getAccount(){
        return `this is an ${this.account} account `
    }
}

const pro= new Bank("Sanjay");


















































































































