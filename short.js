function shortestFind(array) {
    let min= array[0];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element,min);
    
  if (element < min) {
    min = element;
  }
}
  return min;
}


height=[1,100,900,3,2,10];
let shortOutput= shortestFind(height);
console.log('short vale is', shortOutput);
