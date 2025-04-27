let score = "10"
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);

/*
"10" => 10
"10abc" => NaN
true => 1, false => 0
null => 0
undefined => NaN
*/



let isLoggedIn = 1

let booleanInLoggedIn = Boolean(isLoggedIn)
console.log(booleanInLoggedIn)

/*
1 => true, 0 => false
"" => false
"harsha" => true
*/


let num = 10

let stringNumber = String(num)
console.log(typeof stringNumber);
console.log(stringNumber)


//********************  operations  ****************************


let value = 3 ;
let negValue = -(value)

console.log(negValue);

let str1 = "hello"
let str2 = " harsha"
let str3 = str1 + str2
console.log(str3);

console.log( 1 + 2 );           // 3
console.log( "1" + 2 );         // 12
console.log( 1 + "2" );         // 12
console.log( 1 + 2 + "2" );     // 32
console.log( "1" + 2 + 2 );     // 122

console.log(+true);     // 1
console.log(+"");       // 0

let num1, num2, num3;
num1 = num2 = num3 = 2+2;

console.log(num1, num2, num3);


// PostFix
let x = 5
let y = ++x         
console.log(x)      //6
console.log(y)      //6

// Prefix
let a = 10
let b = a++
console.log(a);     //11
console.log(b);     //10
