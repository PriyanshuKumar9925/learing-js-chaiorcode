let score = "55"
// two methods to check the data type of a variable
console.log(typeof score); // method 1
console.log(typeof(score)); // method 2

let valueInNumber = Number(score) // converting string to number data type
console.log(typeof valueInNumber);


// if we find converting a string to number data type is not possible then it will return NaN (Not a Number),but the data type will be number only.

let score1 ="55abcde"
 let valueNumber = Number(score1)
 console.log (typeof valueNumber);
 console.log(valueNumber); // NaN (Not a Number)

 // "33" => 33
 // "55abcde" => NaN
 //boolean ==> if true than 1. and if false than 0.
 