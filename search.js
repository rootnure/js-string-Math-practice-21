const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni.';

const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLowerCase = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLowerCase);
console.log(doesExist);

// ----------------------------
// indexOf()   // will give -1 if not found

console.log(lyrics.indexOf('kala')); // 12
console.log(lyrics.indexOf('Tumi')); // 0

if(lyrics.indexOf('pari') !== -1 ){
    console.log('Exists inside the string');
}
else {
    console.log('Cannot find it');
}

// ---------------------------
// startsWith()
console.log(lyrics.startsWith('2mi')); // false
console.log(lyrics.startsWith('Tumi')); // true

// ---------------------------
// endsWith()
const fileName = 'myCV.pdf';
const otherFile = 'myPic.png';
console.log(fileName.endsWith('.pdf')) // true
console.log(otherFile.endsWith('.jpg')); // false