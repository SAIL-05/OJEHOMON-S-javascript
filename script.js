
//MY JASCRIPT CODE

let age = null;
 //string
 let kecy = "today is kecy's birthday";
 console.log(kecy);
//number
 let myAge = 25;
 console.log(myAge);
 //boolean
 let isTrue = true;
 console.log(isTrue);
 //undefined
 let myName;
 console.log(myName);
 //object
 let student = {
     name: "Kezia",
     age: 20,
     ispreggy: true,
     ismarried: false,
     hobbies: ["reading", "writing", "coding"],
    address: {
        street: "123 Main St",
        city: "Jakarta",
        country: "Indonesia"
    }

};
console.log(student);
console.log(student.name);
//array
let myArray = [1, 2, 3, 4, 5];
console.log(myArray);
//function
let myFunction = function() {
    console.log("Hello, World!");
}
console.log(myFunction);
//symbol
let mySymbol = Symbol("mySymbol");
console.log(mySymbol);
//bigint
let myBigInt = BigInt(1234567890123456789012345678901234567890);
console.log(myBigInt);
//bigint
let myBigInt2 = 1234567890123456789012345678901234567890n;
console.log(myBigInt2);
//null
let myNull = null;
console.log(myNull);
for (let i = -7; i < 5; i++) {
    console.log(i);
}
if (true) {
    console.log("This is true");
}
else if (false) {
    console.log("This is false");
}
console.log(myAge);
console.log(age);
console.log(typeof age);
console.log(typeof null);
console.log(typeof NaN);    
console.log(typeof Infinity);
console.log(typeof 0);
console.log(typeof -0);
//arithmetic operators
let a = 5;
let b = 5;
let incre = a++;
console.log(incre);
console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(b % a); // modulus
console.log(a ** b); // exponentiation
console.log(a++); // increment
console.log(a--); // decrement
console.log(++a); // pre-increment
console.log(--a); // pre-decrement

//unary operators
//binary operators
//comparison operators

if (a > b) {
    console.log(b++);
}
else if (a == b) {
    console.log(a**b);
}

// logical operators
let x = 10;
let y = 5;
// AND & 
console.log(x > y & y < x); // true
// OR ||
console.log(x > y || y < x); // true
// NOT !
console.log(!(x > y)); // false
console.log(x == y); // false


//assignment operators
    let j = 10;
    let u = 5;
    j += u; // x = x + y
    console.log(j); // 15
//comparison operators
//Ayo's admission
const fee = true;
const uniform = false; 
const textbook = false;
const idCard =  true;

const admission = fee && uniform || fee && idCard;
console.log(admission);


if (fee && textbook || uniform && idCard) {
    console.log("Ayo is admitted to the school.");
}
else if (fee && uniform && textbook) {
    console.log("Ayo is admitted to the school, but needs to get an ID card.");
}
else if (fee && uniform) {
    console.log("Ayo is admitted to the school, but needs to get a textbook and an ID card.");
}
else {
    console.log("Ayo is not admitted to the school.");
}

//unary operators
    let dx = 10;
    dx++; // increment
    console.log(x); // 10
    let dy = 5;
    dy--; // decrement
    console.log(y); // 5

//tenary operators
// (condition) ? ("") : ("")
    let agee = 8;
    let isAdult = (agee >= 18  && !(agee > 100)) ? "You don turn adult." : "You are still a pikin.";
    console.log(isAdult); // You are an adult.



    // write a program that checks if a number is even or odd
    let number = 10;
    let isEven = (number % 2 == 0) ? "Even" : "Odd";
    console.log(isEven); // Even