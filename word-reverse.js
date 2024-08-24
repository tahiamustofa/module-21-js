function reverseWord(str) {
//   console.log(str);
const words= str.split(' ');
console.log(words);
let result=[];
for (let index = words.length-1; index >=0 ; index--) {
    const element = words[index];
    // console.log(element);
    // result= result+ ' '+ element;
    result.push(element);
    // console.log(result);
}
console.log(result);
let reverse = result.join(' ');
return reverse;
return result;
}

const myString= 'I am a boy';
console.log(reverseWord(myString));