//Object

// let person = {
//     firstName : "Abhay",
//     lastName : "Chaturvedi",
//     getFullName : function (){
//         return `The name of the person is ${this.firstName} ${this.lastName}`;
//     },

//     pNumber : {
//         mobile_1 : "12341",
//         mobile_2 : "6345",
//     },

// };

// console.log(person.getFullName());
// console.log(person.pNumber.mobile_2);


//Object constructor
// function person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// let person1 = new person("Abhay", "Chaturvedi");
// let person2 = new person("Ajay", "Singh");


// console.log(person1.firstName);
// console.log(`${person2.firstName} ${person2.lastName}`);


// object.create
// const coder = {
//     isStuding : false,
//     printIntro : function(){
//         console.log(`My name is ${this.name}. Am I studying?: ${this.isStuding}`);
//     },
// };

// const me = Object.create(coder);
// me.name = "Abhay Chaturvedi";

// me.isStuding = true;
// me.printIntro();


//classes
// class Vehicle{
//     constructor(name, maker, engine){
//         this.name = name
//         this.maker = maker
//         this.engine = engine
//     }

//     getDetails(){
//         return `the name of the vehicle is ${this.name}`;
//     }
// }

// let v1 = new Vehicle("Creta", "hyundai", 2500);
// let v2 = new Vehicle("Q5", "Audi", 3000);
// console.log(v1.maker);
// console.log(v2.maker);
// console.log(v1.getDetails());



// class person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;


//         let NoaccessFun = function () {
//             return `First name is: ${this.firstName}, Last name is ${this.lastName}`;
//         }


//         this.hasAccessfun = function () {
//             return `First name is: ${this.firstName}, Last name is ${this.lastName}`;
//         }
//     }
// }

// let person1 = new person("Abhay", "Chaturvedi");

// console.log(person1.firstName);
// console.log(person1.NoaccessFun());
// console.log(person1.hasAccessfun());


//Inheritance
class person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getDetails(){
        return `First name is ${this.firstName}, last name is ${this.lastName}`;
    }
}

class Student extends person{
    constructor(firstName, lastName, rollNumber){
        super(firstName, lastName);
        this.rollNumber = rollNumber
    }
    
    getDetails(){
        return `${super.getDetails()} and the roll number is ${this.rollNumber}`;
    }
}

let person1 = new person("Abhay", "Chaturvedi");
console.log(person1.getDetails());

let Student1 = new Student("Abhay","Chaturvedi",23);
console.log(Student1.getDetails());;

