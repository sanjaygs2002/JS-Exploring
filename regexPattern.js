// console.log("Regular expression");

// const pattern = /sanjay/;
// console.log(pattern.test("My name is sanjay"));

// const pattern1= /^sanjay/;
// console.log(pattern1.test("my name is sanjay"));

// const pattern2= /sanjay$/;
// console.log(pattern2.test("My name is sanjay"));

// const pattern3 = /^sanjay$/
// console.log(pattern3.test("My name is sanjay")); // false because exactly sanjay only to have.

// const pattern4= /[0-9]/
// console.log("Digits = "+pattern4.test(1234));

// const pattern5= /[A-Z]/
// console.log(pattern5.test("SANJAY IS MY NAME"));

// const pattern6= /[a-z]/
// console.log(pattern6.test("Sanjay"));

// // . * + ?

// const pattern7= /b.t/
// console.log(pattern7.test("bat"));

// // Quantifiers

// const pattern8= /^\d{5}$/
// console.log(pattern8.test(1234588));

// const str = "hello world";

// console.log(str.match(/world/));  // return type of match is [ 'world', index: 6, input: 'hello world', groups: undefined ]
// console.log(str.match()); // [ '', index: 0, input: 'hello world', groups: undefined ]
// console.log(str.match(/World/));  // return type null

// const str1 = "Hi my is name is Sanjay";
// console.log(str1.replace("Sanjay","sanju"));
// console.log(str1.replace("","sanju")); // sanjuHi my is name is Sanjay
// console.log(str1.replace("Sanjay","")); //Hi my is name is 

// // Practice
// //Validate 10-digit phone number

// const phone= /^\d{10}$/;
// console.log(phone.test(1234567890));

// //Check if string ends with ".com"
// console.log(/\.[com]$/.test("google.com"));


// //Extract words from string  => string into array
// const wordString= /\w+/g
// const str2= "I am Sanjay"
// console.log(str2.match(wordString));


// const text = "[123][456][789]";
// const pattern9= /\[0-9]+/
// console.log(text.match(pattern9));

// const text1 = "<b>hello</b><b>world</b>";
// console.log(text1.replace("<b>hello</b>","text").replace("<b>world</b>","text"));
// console.log(text1.replace(/<b>.*?<\/b>/g,"text"));

// const str = "Hello my Name is Sanjay from Chennai";
// console.log(str.match(/\b[A-Z][a-z]*\b/g));

// const letNum= /^[A-Za-z0-9]{5,}$/
// console.log(letNum.test("Sanjay123"));

// const remSpa= /\s+/g
// console.log("Hello     JS      World".replace(remSpa," "));

// // Password check
// const atleast = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%-?&]).{8,}$/

// Practice -II

const num="12345"
console.log(/\d/.test(num));

const word= "Sanjay";
console.log(/[A-z][a-z]+/.test(word));

const new3= 123456
console.log(/[0-9]{6}/.test(new3));

const str = "hello world";
console.log(str.match(/world/));  // return type of match is [ 'world', index: 6, input: 'hello world', groups: undefined ]
console.log(str.match()); // [ '', index: 0, input: 'hello world', groups: undefined ]
console.log(str.match(/World/));  // return type null

const new6 = "I bought 3 apples and 10 bananas"
console.log(new6.match(/\d+/g));

const new7= "Hello JS World"
console.log(new7.replace(/\s+/g,""));

const pattern1= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(pattern1.test("sanjay@gmail.com"));

const pattern2= /^\d{10}$/;
console.log(pattern2.test(1234567890));

const pattern3= "Learning #JavaScript and #React today";
console.log(pattern3.match(/#[\w]+/g));

const pattern4= "Phone: 987-654-3210";
console.log(pattern4.replace(/\D/g,""));

const pattern5 = "Hello     JS      World";
console.log(pattern5.replace(/\s+/g," "));

const pattern6 = "Hello my Name is Sanjay from Chennai"
console.log(pattern6.match(/\b[A-Z][a-z]*\b/g));      // uppercase using word boundary

const pattern7= "sanjay@gmail.com";
console.log(pattern7.match(/@[a-z]*/,""));

console.log(/^[a-z0-9]{5,12}$/.test("sanjay123"));























