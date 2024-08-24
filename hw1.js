// Homework: 1
// Write a function that will take 3 numbers and return the max number
// Instructions
// First time do it using if-else
// Second time do it using Math.min or Math.max

function maxFind(a,b,c){

if (a>b && a>c) {
    return a;
} else if(b>a && b>c){
    return b;
}
else{
    return c;  
}
}

// console.log(maxFind(10,20,30));


function mathMax(a,b,c){
   let max= Math.max(a,b,c);
   return max;
}

// console.log(mathMax(1,2,3));


// Homework: 1
// Write a function that will take 3 numbers and return the max number
// Instructions
// First time do it using if-else
// Second time do it using Math.min or Math.max

function minFind(a,b,c){

    if (a<b && a<c) {
        return a;
    } else if(b<a && b<c){
        return b;
    }
    else{
        return c;  
    }
    }
    
    console.log(minFind(10,20,30));
    
    
    function mathMin(a,b,c){
       let min= Math.min(a,b,c);
       return min;
    }
    
    console.log(mathMin(1,2,3));