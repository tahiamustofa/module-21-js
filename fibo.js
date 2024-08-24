// fibo=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

// fino[n]=fibo[n-1]+fibo[n-2]
// fibo[i]=fibo[i-1]+fibo[i-2]

let fibo = [0,1];
for (let index = 2; index < 13; index++) {
    fibo[index]=fibo[index-1]+fibo[index-2] 
    
}
console.log(fibo);



