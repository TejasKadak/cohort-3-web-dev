// let x:number | string = 1
// x = "tejas"
// console.log(x)

// function greet(firstName: string){
//     console.log("hello " + firstName)
// }

// greet("Tejas")

// function sum(a:number , b:number){
//     return a + b;
// }

// let ans = sum(1,2);

// console.log(ans)

// function isLegal(age:number){
//     if(age >= 18){
//         return true;
//     } else{
//         return false;
//     }
// }

// if(isLegal(9)){
//     console.log("user can vote");
// } else{
//     console.log("user cannot vote")
// }



function delayedCall(fn:()=> void){
    setTimeout(fn, 1000);
}


delayedCall(function(){
    console.log("hindiiii")
})