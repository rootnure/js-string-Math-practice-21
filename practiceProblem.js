// Problem 1
function smallestInThree(num1, num2, num3) {
    if(num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }
}


// Problem 2
function smallestInArray(numbers) {
    let smallest = numbers[0];
    for(const number of numbers) {
        if(number < smallest) {
            smallest = number;
        }
    }
    return smallest;
}


// Problem 3
function averageOfArrayNumbers(numbers) {
    let sum = 0;
    const arrayLength = numbers.length;
    for(const number of numbers) {
        sum += number;
    }
    const average = sum / arrayLength;
    return average;
}


// Problem 4
function findRectangleArea(height, width) {
    const area = height * width;
    return area;
}


// Problem 5
function findMaxInArray(numbers) {
    let max = numbers[0];
    for(const number of numbers){
        if(number > max) {
            max = number;
        }
    }
    return max;
}

function findSecondMax(numbers) {
    const highest = findMaxInArray(numbers);
    const highestRemovedArray = [];
    for(const number of numbers) {
        if(number !== highest) {
            highestRemovedArray.push(number);
        }
        continue;
    }
    const secondHighest = findMaxInArray(highestRemovedArray);
    return secondHighest;
}

// console.log(smallestInThree(15, 17, 19));
// console.log(smallestInArray([65, 41, 6, 51, 17]));
// console.log(averageOfArrayNumbers([15, 17, 16, 18]))
// console.log(findRectangleArea(10, 5));
console.log(findSecondMax([65, 41, 6, 51, 17]))