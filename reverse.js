// string reverse
function reverseString(text) {
    let reversedString = '';
    for(let i = text.length-1; i >= 0; i--){
        const element = text[i];
        reversedString += element;
    }
    return reversedString;
}

const myString = 'Learning Web Development';
const reversed = reverseString(myString);
console.log(reversed);

// word revers
function reverseWords(str) {
    const words = str.split(' ');
    const reverse = [];
    for(let i = words.length - 1; i >= 0; i--){
        const word = words[i];
        reverse.push(word);
    }
    const reversedWords = reverse.join(' ');
    return reversedWords;
}

const stringWordsReversed = reverseWords(myString);
console.log(stringWordsReversed);