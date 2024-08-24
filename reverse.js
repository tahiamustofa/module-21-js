function reverseFunction(text) {
   
    let reverse= '';
    for (let index = text.length - 1 ; index >= 0 ; index--){
        const element = text[index];
       
        // text.length mane element number count kore
        reverse= reverse + element;
        console.log(element,reverse);
    }
    return reverse;
}

const myString = 'I am a good girl';
const reversed = reverseFunction(myString);

console.log('final output',reversed);


// function reverseWord(str) {
//     const words= str.split(' '); 
//     console.log(words);
//        let result= [];
//     for (let index = words.length-1; index >= 0 ; index--) {
     
//      const element = words[index];
//      result.push(element);
     
//    }
//     console.log(result);
//  const reversed = result.join(' ');
//     return reversed;
//  }
//  const myString= 'I am a boy';
//  let output=reverseWord(myString);
//  console.log(output);
 