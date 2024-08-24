const lyrics = 'kala kala sada kala . tumi bondhu kala Pakhi ami jeno ki.boshonto kale tumai bolte parini';
const parts=lyrics.split(' ');
const sentance=lyrics.split('.');
const chars=lyrics.split('');//every charectar means '' empty string 
// console.log(chars);
const partial = lyrics.slice(5,8);
console.log(partial);
const partial2 = lyrics.substring(5,8);
console.log(partial2);

const line=['Kala kala sada kala', 'Tumi bondhu kala Pakhi ami jeno ki',
    'Boshonto kale tumai bolte parini','Rong jomeche sada kalka']

    const newSong = line.join('. ');
    console.log(newSong);