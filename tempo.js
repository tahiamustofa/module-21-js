let first =5;
let sec =7;

console.log(first, sec);

// first=sec;
// sec=first;
// approach1
// const temp= first;
// first= sec;
// sec= temp;
// console.log(first, sec);

// approach2 distructuring

[first,sec]= [sec,first];
console.log(first, sec);
