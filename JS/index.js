//arrow function
// const c = function(x,y){
//     return x+y;
// }
// console.log(c(5,6));

// const b = (x,y) => {
//     return x+y;
// }
// console.log(b(5,6));

// const a = (x,y) => x+y;
// console.log(a(5,6));

//spread operator
// const q1 = ["Jan", "feb", "Mar"]
// const q2 = ["Apr", "May", "Jun"]
// const year = [...q1,...q2];
// console.log(year);

// const myNum = [2,3,5,12,54];
// const max = Math.max(...myNum);
// console.log(max);

//for of loop
// const myNum = [2,3,5,12,54];
// let sum = 0;
// for (let num of myNum){
//     sum += num
// }
// console.log(sum);

//Map
// const fruits = new Map([
//     ["apple", 500],
//     ["banana", 300],
//     ["oranges", 400],
// ]);

// fruits.set("papaya",200);
// console.log(fruits);
// console.log(fruits.get("oranges"));

//sets
// const letters = new Set();

// letters.add("a");
// letters.add("b");
// letters.add("a");

// console.log(letters);

//classes

// class Car{
//     constructor(name, mfgYear){
//         this.name = name;
//         this.mfgYear = mfgYear;
//     }
// }

// const myCar1 = new Car("Mercedes", 2022);
// console.log(myCar1);

//promise
// const myFun = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("This is inside promise");
//     }, 2000);
//   });
// };

// myFun().then(()=>{
//     console.log("Resolved");
// }).catch(() =>{
//     console.log("Rejected");
// });


//Symbol
// const person ={
//     firstname: "john",
//     lastName: "doe",
//     age: 30,
// };

// let id = Symbol("id")
// person[id] = 140111;

// console.log(person);


// Rest operator
const addNumbers = (...args) => {
    let sum = 0;
    for(let arg of args){
        sum += arg
    }
    return sum
}

console.log(addNumbers(10, 13, 42, 23, 44));