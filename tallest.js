function maxInArray(numbers) {
    // console.log('array inside the function:', numbers); 
    let max = numbers[0];
   
    for (let index = 0; index <numbers.length; index++) {
        const element = numbers[index];
        // console.log(element);
        
        if (element > max) {
            max=element;

        }
       
    }
    
    return max;
}

const height = [167,190,120,165,137,200,1,302];
const tallest = maxInArray(height);

console.log('tallest person is:',tallest);