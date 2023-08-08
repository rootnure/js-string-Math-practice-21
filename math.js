const result = Math.pow(3, 8);
// console.log(result);

const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);

/* 
if(gap < 5) {
    console.log('Aso bondhu hoi');
} else {
    console.log('Better luck next time');
}
 */

// ---------------------------
// round(), ceil(), floor()
// ---------------------------
const number = 2.45345;
const fullNumber = Math.round(number);
// console.log(fullNumber);

const ceilNumber = Math.ceil(1.0000011);
// console.log(ceilNumber);

const floorNumber = Math.floor(3.95);
// console.log(floorNumber);

// -------------------
// random
// -------------------
console.log(Math.random()); // return a random floating number between 0 to 1
console.log(Math.random()*100); // return a random floating number between 0 to 100
console.log(Math.round(Math.random()*100)); // return a random integer number between 0 to 100
