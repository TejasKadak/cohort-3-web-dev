// let a = "5";
// let b = "6";

// function sum(a, b){
//     return a + b;
// }

// console.log(sum(a,b));

// let age  = 111;

// function canVote(age){
//     if(age > 18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// if(canVote(age)){
//     console.log("you can vote");
// }
// else{
//     console.log("you cannot vote");
// }


// let num = 201;

// if(num % 2 == 0){
//     console.log("number is even");
// }
// else{
//     console.log("number is odd");
// }


// const a = 5;

// function totalSum(a){
//     let sum = 0;
//     for(var b = 1; b <= a; b++ ){
//           sum = sum + b;
//     }
//     return sum;
// }

// console.log(totalSum(a));

// function greet(user){
//     let title;
  
//     if(user.gender == "male"){
//         title = "Mr";
//     }
//     else if (user.gender == "female"){
//         title = "Mrs"
//     }

//     console.log("hi " + title + " " + user.name + " your age is " + user.age);

//     if(user.age >= 18){
//         console.log("you are legal to vote");
//     }
//     else{
//         console.log("you are not legal to vote");
//     }
// }

// let user = {
//     name: "Tejas",
//     age: 30,
//     gender: "male",
// }

// greet(user);



// // Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
// let arr = [4, 5, 6, 8, 9, 7];

// function solve(arr){
//     let arr2= [];

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2 === 0){
//             arr2.push(arr[i]);
//         } 
//     }
//     return arr2;

// }

// let ans = solve(arr);
// console.log(ans);






// // Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
// const users = [{
//     name: "Tejas",
//     age: 23,
// },
// {
//      name: "Shreyas",
//      age: 12,

// }]

// function solve(users){
//      const arr1 = [];
//      for(let i=0; i<users.length; i++){
//         if(users[i].age >= 18){
//             arr1.push(users[i]);
//         }

//      }  
//      return arr1;
// }


// console.log(solve(users));












function filterAdultUsers(users) {
    return users.filter(user => user.age > 18 && user.gender === "male");
}

// Example usage
const users = [
    { name: "Alice", age: 17, gender: "female" },
    { name: "Bob", age: 25, gender: "male" },
    { name: "Charlie", age: 160, gender: "male" },
    { name: "Diana", age: 30, gender: "female" }
];

const adultUsers = filterAdultUsers(users);
console.log(adultUsers);
// Output: [{ name: "Bob", age: 25 }, { name: "Diana", age: 30 }]
