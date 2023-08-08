function maxInArray(numbers) {
    let max = numbers[0];

    // normal for loop
    for(let i = 1; i < numbers.length; i++) {
        const index = i;
        const value = numbers[index];
        if(value > max ){
            max = value;
        }
    }

    // for of loop
    /* for(const value of numbers){
        if(value > max){
            max = value;
        }
    } */

    return max;
}

const heights = [167, 190, 120, 165, 137, 265];
const tallest = maxInArray(heights);
console.log('Tallest person is:', tallest);


// Homework: Write a function to get the lowest number in an array
function minInArray(numbers) {
    let min = numbers[0];
    // for of loop
    for(const value of numbers){
        if(value < min){
            min = value;
        }
    }

    return min;
}

const lengths = [167, 190, 120, 165, 137, 265];
const shortest = minInArray(lengths);
console.log('Shortest distance is:', shortest);