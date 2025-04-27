// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);     // == means loose equality (allows type conversion), BUT null is a special case — in loose equality: null only equals undefined
        
console.log(null >= 0);     // null become 0   ( >= is a comparison operator, and comparisons automatically convert null to a number.)
console.log(null <= 0);     // same as above


console.log(undefined > 0);      // undefined is converted to NaN
console.log(undefined == 0);
console.log(undefined < 0);


// ===   used to check the datatypes also

console.log("2" === 2);     // false
console.log("2" === "2");     // true
