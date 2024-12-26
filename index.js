
// for(let i=1; i<=10; i++ ){
// // console.log(`${i}*5= ${i*5}`);

// // console.log(`${i*5}`);
// // console.log(i*5);
// // console.log(i + "*5=" + (i * 5));
// console.log("hello" + i);

// }

// let students={
//     Alice:85,
//     Bob:95,
//     Charle:80,
// }

// for(let student in students){
//  console.log(`${student} has been scored ${students[student]}`);
// }

// const fruits=["Apple","guava","mango"]
// for (let fruit of fruits){
//    console.log(`I like ${fruit}`);
// }

// const names="EMRAN";
// for(let name of names ){
//  console.log(name);
// }

// const students={
//     Emran:10,
//     Nahian:5,
//     gazi:25,
// }

// for(let student in students){

//     console.log(`${student} has been scoored ${students[student]}`);
// }

// const studentMap= new Map([
//     [101, 'emran'],
//     [102, 'naif'],
//     [103, 'saif']
// ]);
// studentMap.forEach((name, id)=>{
//  console.log(`${id} is ${name}`);
// });

// let countDown=10;
// // console.log("countdown starts");
// while(countDown > 0){

//     console.log(`${countDown}`);
//     countDown--;

// }
// let i=1;
// do{
//  console.log(`count is start ${i}`);
//  i++;
// } while(i<=7);
// let num=29;
// let i=1;
// do{
// console.log(`${num} * ${i} = ${num * i}`);
// i++;
// }while(i<=10);


// array syntax

//    Array.map(callback(Element,index, array), thisArgs)

// const fruits=["mango","bannana","cherry"];

// const upperCasetoFruits=fruits.map(fruit=> fruit.toUpperCase());
// console.log("upper case",upperCasetoFruits);
// console.log("original", fruits)

// const users=[
//     {name:"alice",age:22},
//     {name:"bob",age:20},
//     {name:"john",age:21}
// ]

// const names=users.map(user=>user.age);
// console.log(names);

// filter syntax

// Array.filter(callback(element,index, array),thisArgs)

// const numbers=[1,2,3,4,5,6,7,8,9];

// const evenNumber=numbers.filter(num=>num%2===0);
// console.log("new number",evenNumber);
// console.log("original number",numbers);


// // reduce method syntax

// Array.reduce(callback(accumullator,currentValue, index ,array),initialValue);

// const profits=[100,200,300,400,500];
// const totalProfit=profits.reduce((a,b)=>a+b);
// console.log(totalProfit);


// destucture method
// const myArray = ["emran", 32, "webdevloper", "dhamaura"];

// const [name, age, job, address] = myArray;
// console.log(name);
// console.log(age);
// console.log(job);
// console.log(address);
// spread operator
// const newArray = [...myArray, "bangladesh", "dhaka"];
// console.log(newArray);

// arraymethod
// let list = [1, 2, 3, 4, 5]

// // list.map(function(jkono) {

// //     console.log(jkono);
// // });

// list.map((jkono) => {

//     console.log(jkono);
// });

// class persion {
//     constructor(name, age) {

//         this.name = name;
//         this.age = age;
//     }
// }

// const persion1 = new persion("naahian", 30);
// persion1.name = "jamal";
// console.log(persion1);

// "slice method"

// const fruits=["Apple","banana","cherry","mango","grape","pineapple"];
// // const fruit=fruits.slice(2,4);
// const fruit=fruits.slice(2);
// console.log(fruit);
// console.log("original" ,fruits);

// splice method
// syntax splice
// Array.splice(Start, deleteCount, item1,item2 ...);

// const fruits=["Apple","banana","cherry","mango","grape","pineapple"];

// const fruit= fruits.splice(1,3);
// console.log(fruit);
// console.log(fruits);

// push method syntax

// Array.push(element1,element2,elememt3 ....);

// let shopingCart=["mobile","shirt","shoes"];

// shopingCart.push("laptop");
// console.log(shopingCart);

// let users=[{
//     name:"emran",
//     roll:1
// }]

// users.push({
//     name:"naif",
//     roll:2});
// console.log(users);


// let shopingCart=["shirt","mobile","laptop"];

//  let removeshop=shopingCart.pop();
//  console.log(removeshop);


// string,charAt(index);
// let greetings="Hello world";
// let firstCharacter = greetings.charAt(0);

// console.log(firstCharacter);


// charCodeAt syntax

// String.charCodeAt(index);

// let name="hi i am emran";
// let stringCode=name.charCodeAt(0);
// console.log(stringCode);

// conact method syntax

// stringCode.concat(string1,string2,string3....);
// let name1="emran";
// let name2="nahian";
// let fullName=name1.concat(" ",name2);
// console.log(fullName);


// syntax includes method
// string.includes(searchString,position);
// PerformanceServerTiming.includes(substring,startINdex);

// let sentence="javascript is a  versatile language";
// let word= sentence.includes("versatile");
// console.log(word); //it returns boolean value
let email="user@gmail.com";
if(email.includes("@")){
    console.log("valid email");
}else{
    console.log("invalid email");
}