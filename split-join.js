const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni.';
const words = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
// console.log(words);
// console.log(sentences);
// console.log(chars);

// slice()
const partial = lyrics.slice(5, 18); // startingIndex, endingIndex-1
// console.log(partial); // bondhu kala p

// substring()
const partial2 = lyrics.substring(5, 15); // startingIndex, endingIndex-1
// console.log(partial2); // bondhu kal

// substr()
const partial3 = lyrics.substr(5, 5); // startingIndex, lengthFromStartingIndex
// console.log(partial3); // bondh

// concat()
const newLine = partial.concat(' : This is the first part');
// console.log(newLine); // bondhu kala p : This is the first part

// join()
const sentencesArray = [
    'Tumi bondhu kala pakhi ami jeno ki',
    'Bosonto kale tomai bolte pari ni',
    'Sada sada kala kala',
    'rong jomechey sada kala'
];
const newLyrics = sentencesArray.join('. ');
console.log(newLyrics); // Tumi bondhu kala pakhi ami jeno ki. Bosonto kale tomai bolte pari ni. Sada sada kala kala. rong jomechey sada kala

const myStr = "         Hello      World            ";
const myCleanStr = myStr.trim(); // remove the unnecessary starting&ending white space from string
console.log(myCleanStr);