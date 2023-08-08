//84 99 77 //69 97 99

const jimMarks = 88;
const delaMarks = 97;
const chinkuMarks = 95;


if(jimMarks > delaMarks && jimMarks > chinkuMarks) {
    console.log('jim will get the cake this time');
}
else if (delaMarks > jimMarks && delaMarks > chinkuMarks) {
    console.log('dela will be granted the cake');
}
else {
    console.log('Chinku will be the new cake winner');
}


// Homework 1: do this using if-else inside a function and return the name;
// Homework 2: do this using Math.max() inside a function and return the name;

// Homework 3: find the lowest using if-else inside a function and return the lowest value
// Homework 4: find the lowest using Math.min() inside a function and return the lowest value


// Homework 1 solution
function maxInThreeIfElse(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return 'Jim';
    }
    else if (num2 > num1 && num2 > num3) {
        return 'Dela';
    }
    else {
        return 'Chinku';
    }
}

const cakeIfElse = maxInThreeIfElse(jimMarks, delaMarks, chinkuMarks);
console.log(cakeIfElse);


// homework 2 solution
function maxInThreeMathMax(num1, num2, num3) {
    const max = Math.max(num1, num2, num3);
    if(max === num1) {
        return 'Jim';
    }
    else if (max === num2){
        return 'Dela';
    }
    else {
        return 'Chinku';
    }
}

const cakeMathMax = maxInThreeMathMax(jimMarks, delaMarks, chinkuMarks);
console.log(cakeMathMax);


// Homework 3 solution
function minInThreeIfElse(num1, num2, num3) {
    if(num1 < num2 && num1 < num3) {
        return 'Jim';
    }
    else if (num2 < num1 && num2 < num3) {
        return 'Dela';
    }
    else {
        return 'Chinku';
    }
}

const noCakeIfElse = minInThreeIfElse(jimMarks, delaMarks, chinkuMarks);
console.log(noCakeIfElse);


// homework 4 solution
function minInThreeMathMax(num1, num2, num3) {
    const min = Math.min(num1, num2, num3);
    if(min === num1) {
        return 'Jim';
    }
    else if (min === num2){
        return 'Dela';
    }
    else {
        return 'Chinku';
    }
}

const noCakeMathMax = minInThreeMathMax(jimMarks, delaMarks, chinkuMarks);
console.log(noCakeMathMax);
