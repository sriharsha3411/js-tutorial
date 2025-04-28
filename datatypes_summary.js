// two types of datatypes in js 

// primitive (call by value)
// 7 types : String, Number, Boolean, null, Undefines, Symbol, BigInt

const score = 500 
const scoreValue = 100.3

let isLoggedIn = false      
                                  //(js is dynamically typed language -- meaning that variabless are checked during runtime , not at compile time)
let outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 35776578634653647n     // n at end of number represents bigint

console.log(typeof bigNumber);


// reference ( Non Primitive)---> (call by refernce)
// Array, Objects, Functions


const heros = ["prabhas", "allu arjun", "ram charan"];

let myObj = {
    userName : "harsha",
    age : 22,
}

const myFunction = function(){
    console.log("hello World");
}

myFunction();

console.log(typeof outsidetemp);



// *****************************************

// Stack (primitive) , Heap (Non-primitive)

let myName = "harsha";        // variables declares in stack
let anotherName = myName;    // a copy of value of myName is given to the anotherName

anotherName = "sunny"       // myName wont chance , when we change anotherName

console.log(myName);       
console.log(anotherName);




let userOne = {                     // varibale is dclared in stack, referance is given to value in heap
    email: "harsha@gmail.com",      //  value is stored in heap
    age: 22,
}

let userTwo = userOne;      // userTwo gets the reference of  value of userOne, not the copy of value as in primitive 

userTwo.email = "sunny@gmail.com";      // userOne and userTwo has same reference , so email value will be changed

console.log(userOne.email);     
console.log(userTwo.email);
