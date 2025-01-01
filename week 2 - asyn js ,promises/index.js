// function sum(a,b){
//     return parseInt(a) + parseInt(b);
// }

// let ans = sum("5","6");
// console.log(ans);


// function sum(n){
//     let totalSum = 0;
//     for(let i =0; i<=n; i++){
//         totalSum += i;
//     }
//     return totalSum;
// }

// let ans = sum(10);
// console.log(ans);

const fs = require('fs');

function print(err, data){
    if(err){
        console.log("error occured");
    }
    else{
        console.log(data);
    }
}

fs.readFile('./a.txt', 'utf-8', print);
// console.log(data1);

fs.readFile('./b.txt', 'utf-8', print);
// console.log(data2);

// console.log("done");