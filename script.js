
// //MY JASCRIPT CODE

// let age = null;
//  //string
//  let kecy = "today is kecy's birthday";
//  console.log(kecy);
// //number
//  let myAge = 25;
//  console.log(myAge);
//  //boolean
//  let isTrue = true;
//  console.log(isTrue);
//  //undefined
//  let myName;
//  console.log(myName);
//  //object
//  let student = {
//      name: "Kezia",
//      age: 20,
//      ispreggy: true,
//      ismarried: false,
//      hobbies: ["reading", "writing", "coding"],
//     address: {
//         street: "123 Main St",
//         city: "Jakarta",
//         country: "Indonesia"
//     }

// };
// console.log(student);
// console.log(student.name);
// //array
// let myArray = [1, 2, 3, 4, 5];
// console.log(myArray);
// //function
// let myFunction = function() {
//     console.log("Hello, World!");
// }
// console.log(myFunction);
// //symbol
// let mySymbol = Symbol("mySymbol");
// console.log(mySymbol);
// //bigint
// let myBigInt = BigInt(1234567890123456789012345678901234567890);
// console.log(myBigInt);
// //bigint
// let myBigInt2 = 1234567890123456789012345678901234567890n;
// console.log(myBigInt2);
// //null
// let myNull = null;
// console.log(myNull);
// for (let i = -7; i < 5; i++) {
//     console.log(i);
// }
// if (true) {
//     console.log("This is true");
// }
// else if (false) {
//     console.log("This is false");
// }
// console.log(myAge);
// console.log(age);
// console.log(typeof age);
// console.log(typeof null);
// console.log(typeof NaN);    
// console.log(typeof Infinity);
// console.log(typeof 0);
// console.log(typeof -0);
// //arithmetic operators
// let a = 5;
// let b = 5;
// let incre = a++;
// console.log(incre);
// console.log(a + b); // addition
// console.log(a - b); // subtraction
// console.log(a * b); // multiplication
// console.log(a / b); // division
// console.log(b % a); // modulus
// console.log(a ** b); // exponentiation
// console.log(a++); // increment
// console.log(a--); // decrement
// console.log(++a); // pre-increment
// console.log(--a); // pre-decrement

// //unary operators
// //binary operators
// //comparison operators

// if (a > b) {
//     console.log(b++);
// }
// else if (a == b) {
//     console.log(a**b);
// }

// // logical operators
// let x = 10;
// let y = 5;
// // AND & 
// console.log(x > y & y < x); // true
// // OR ||
// console.log(x > y || y < x); // true
// // NOT !
// console.log(!(x > y)); // false
// console.log(x == y); // false


// //assignment operators
//     let j = 10;
//     let u = 5;
//     j += u; // x = x + y
//     console.log(j); // 15
// //comparison operators
// //Ayo's admission
// const fee = true;
// const uniform = false; 
// const textbook = false;
// const idCard =  true;

// const admission = fee && uniform || fee && idCard;
// console.log(admission);


// if (fee && textbook || uniform && idCard) {
//     console.log("Ayo is admitted to the school.");
// }
// else if (fee && uniform && textbook) {
//     console.log("Ayo is admitted to the school, but needs to get an ID card.");
// }
// else if (fee && uniform) {
//     console.log("Ayo is admitted to the school, but needs to get a textbook and an ID card.");
// }
// else {
//     console.log("Ayo is not admitted to the school.");
// }

// //unary operators
//     let dx = 10;
//     dx++; // increment
//     console.log(x); // 10
//     let dy = 5;
//     dy--; // decrement
//     console.log(y); // 5

// //tenary operators
// // (condition) ? ("") : ("")
//     let agee = 8;
//     let isAdult = (agee >= 18  && !(agee > 100)) ? "You don turn adult." : "You are still a pikin.";
//     console.log(isAdult); // You are an adult.



//     // write a program that checks if a number is even or odd
//     let number = 10;
//     let isEven = (number % 2 == 0) ? "Even" : "Odd";
//     console.log(isEven); // Even

// // conditionals statement
// // if statement 
// if (true) {
//     console.log("This is true");    
// }
// let o = 30;
// let p = 20;
// if (o > p) {
//     console.log("a is greater than b");    
// }

// // // if else statement
// if (o < p) {
//     console.log("a is less than b");    
// }
// else {
//     console.log("a is not less than b");    
// }
// let Dbpass = "h;fjovsdffvb";
// let password = "h;fjovsdffvb";

// if (Dbpass === password) {
//     console.log("Login successful");    
// }
// else {
//     console.log("Login failed");
// }

// let name = prompt("Enter your name: ");
// alert(name);  

// let mnum = prompt("Enter a number: ");
// const mmnum = prompt("Enter a number: ");
// alert34(`Your lucky number is ${num}`);
// const username = prompt("Enter your name: ");
// const mage = prompt("Enter your age: ");
// alert(`Hello ${username}, you are ${age} years old`);
// console.log(typeof mmnum);
// let valueOne = parseInt(prompt("Enter first number: "));
// let valueTwo = parseInt(prompt("Enter second number: "));
// let ans = valueOne + valueTwo;
// alert(ans);

// let num = parseInt(prompt("Enter number: "));

// if (num < 0 ){
//     alert(` ${num} is negative`);    
// }
// else if (num > 0) {
//     alert(`${num} is positive`);    
// }
// else if (num === 0) {
//     alert(`${num} is zero`);    
// }

// // write a program to check if a number is even or odd
//  num = parseInt(prompt("Enter number: "));
// if (num % 2 === 0) {
//     alert(`${num} is even`);
// }
// else if (num % 2 !== 0) {
//     alert(`${num} is odd`);    
// }
//     a = parseInt(prompt("Enter first number: "));
//     b = parseInt(prompt("Enter second number: "));

// if (a > b) {
//     alert(`${a} is greater than ${b}`);    
// }
// else if (a < b){
//     alert(`${a} is less than ${b}`);    
// }
// else if (a === b) {
//     alert("the numbers are equal");    
// }
//  else if (isNaN(a) || isNaN(b)) {
//     alert("You self look wetin you dey write");
//  }      

// //write a program to check if a number is even or odd
//  num = parseInt(prompt("Enter number: "));
// if (num % 2 === 0) {
//     alert(`${num} is even`);
// }
// else  {
//     alert(`${num} is odd`);    
// }
// // if else if statement

// let grade = parseInt(prompt("Enter your grade: "));
// if (grade >= 70 && grade <= 100) {  
//     alert(" Excellent you got A ");    
// }
// else if (grade >= 60 && grade < 70) {
//     alert(" You are good B ");    
// }
// else if (grade >= 50 && grade < 60) {
//     alert("Average C ");    
// }
// else if (grade >= 40 && grade < 50) {
//     alert(" You should learn more D ");    
// }
// else if (grade >= 0 && grade < 40) {
//     alert("You no sabi book F student");    
// }
// else if (grade < 0) {
//     alert("You are owing me mark");    
// }
// else if (grade > 100) {
//     alert("You are a liar");    
// }
// else if (isNaN(grade)) {
//     alert("You self look wetin you dey write");    
// }

// let Weight = parseFloat(prompt("Enter your Weight: "));
// let Height = parseFloat(prompt("Enter your Height: "));
// let BMI = Weight / (Height * Height);
// if (BMI < 18.5) { 
//     alert("You are underweight");    
// }
// else if (BMI >= 18.5 && BMI < 24.9) {
//     alert("You are normal weight");    
// }
// else if (BMI >= 25 && BMI < 29.9) {
//     alert("You are overweight");    
// }
// else if (BMI >= 30) {
//     alert("You are obese");    
// }
// else if (isNaN(Weight) || isNaN(Height)) {
//     alert("You self look wetin you dey write");    
// }

// // Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

// // Write a program that determines if a year is a leap year.

let daysOfmonth = parseInt(prompt("Enter the number of days in feburary: "));
if (daysOfmonth === 28) {
    alert("This is not a leap year");
}
else if (daysOfmonth === 29) {
    alert("This is a leap year");
}
else if (daysOfmonth < 28) {
    alert("the days in febuary cannot be less than 28 days");
}
else if (isNaN(daysOfmonth)) {
    alert("You self look wetin you dey write");
}

// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

let purchaseAmount = parseFloat(prompt("Enter the purchase amount: "));
if (purchaseAmount >50 && purchaseAmount >= 100) {
    alert(`You have a discount of ${(20/100)*purchaseAmount}`);    
}
else if (purchaseAmount >= 50 && purchaseAmount < 100) { 
    alert(`You have a discount of ${(10/100)*purchaseAmount}`);
}
else if (purchaseAmount < 50) { 
    alert("You have no discount");
}
else if (isNaN(purchaseAmount)) {
    alert("You self look wetin you dey write");
}

// Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.

let timehrs = parseInt(prompt("Please enter the current hour (0-23):"));
if (timehrs >= 0 && timehrs < 12) {
    alert("Good morning");    
}
else if (timehrs >= 12 && timehrs < 18) {
    alert("Good afternoon");    
}
else if (timehrs >= 18 && timehrs < 24) {
    alert("Good evening");    
}
else if (timehrs < 0 || timehrs > 23 || isNaN(timehrs)) {
    alert("enter a valid time");    
}







// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.

let secretNumber = 20;
let guess = parseInt(prompt("Guess the secret number between 1 and 100: "));
if (guess === secretNumber) {
    alert("Congratulations! You guessed the correct number.");
}
else if (guess < secretNumber) {
    alert("Your guess is too low. Try again.");
}
else if (guess > secretNumber) {
    alert("Your guess is too high. Try again.");
}
else {
    alert("Please enter a valid number.");
}






// let nameBox = ["John", "Jane", "Doe", "Smith", "Emily", "Michael", "Sarah"];
// nameBox.push("David");
// nameBox.pop();
// nameBox.shift();
// nameBox.unshift("Chris");
// nameBox.indexOf("Doe");
// nameBox.join(" ");
// nameBox.slice(1, 4);
// nameBox.splice(2, 1, "Alex", "Emma");
// console.log(nameBox);

// //objects

// let person = {
//     name: "John",
//     age: 30, 
//     score:90,
// }


// function callMyName(){
//     var name ='ife';
//     for (let i = 0; i < 4; i++){
//         let newName = 'ope';
//         var secname = 'james';
//     }
//     console.log(newName);
//     console.log(secname);
// }