/**
 * 1. first element of fibonacci --> 0
 * 2. second element of fibonacci --> 1
 * 3. new element of fibonacci --> sum of previous two elements
 * example: n-th element = (n-1)-th element + (n-2)-th element // n = 3, 4, 5, 6 ... ( |R − {0, 1, 2} --> all real number except 0, 1 and 2)
 */

// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

/* 
    fibo[3] = fibo[2] + fibo[1]
    fibo[4] = fibo[3] + fibo[2]
    fibo[5] = fibo[4] + fibo[3]
    fibo[50] = fibo[49] + fibo[48]
    fibo[365] = fibo[364] + fibo[363]
    fibo[n] = fibo[n-1] + fibo[n-2]
    fibo[i] = fibo[i-1] + fibo[i-2]
*/

const fibo = [0, 1];
for(let i = 2; i <=24; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
}

console.log(fibo);