const lyrics = 'kala kala sada kala , tumi bondhu kala Pakhi ami jeno ki';
const searchPera = 'Pakhi';
// const doesExicst = lyrics.includes('paKhi');
// const doesExicst = lyrics.includes(searchPera);
const lyricsLowercase = lyrics.toLowerCase();
const searchPeraLower = searchPera.toLowerCase();
// const doesExicst = lyricsLowercase.includes(searchPeraLower);
const doesExicst = lyrics.toLowerCase().includes(searchPera.toLowerCase());
// console.log(doesExicst);

// console.log(lyrics.indexOf('tumi'));

// if (lyrics.indexOf('sada')!== -1) {
//     console.log('exist');
// } else {
//     console.log('not exist');
// }

// console.log(lyrics.startsWith('kala'));
const fileName = 'abultabul.png';
const otherFileName = 'abultabul.jpg';

console.log('end',fileName.endsWith('.png'));