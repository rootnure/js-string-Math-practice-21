let first = 5;
let second = 7;
console.log(first, second);
// This is wrong approach
/* first = second;
second = first; */

// Approach 1: use temp
/* const temp = first;
first = second;
second = temp; */

// Approach 2: use destructuring
[first, second] = [second, first];
console.log(first, second);

// Approach 3: use addition, subtraction (only work for numeric value)
/* a = a + b;
b = a - b;
a = a - b;
 */