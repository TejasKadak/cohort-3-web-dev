// class Rectangle{
//     constructor(height, width, color){
//         this.height = height;
//         this.width = width;
//         this.color = color;
//     }

//     area(){
//         const area = this.height * this.width;
//         return area;
//     }

//     print(){
//         console.log("painting with color " + this.color);
//         console.log(this);
//     }
// }


// const rect = new Rectangle(2, 4,"red");
// const area = rect.area();
// console.log(area);
// const print = rect.print();


// const now = new Date();
// console.log(now.getFullYear());

// const map = new Map();
// map.set('name', 'tejas');
// map.set('age', 23);
// console.log(map.get('name'));
// console.log(map.get('age'));

// const firstName = map.get('name');
// console.log(firstName);

// function logName(){
//     console.log("Tejas Kadak");
// }

// setTimeout(logName, 3000);


// defining a promose is hard
// using a promise is easy

// function waitFor3s(resolve){
//     console.log("inside a promise");
//     setTimeout(resolve, 3000);
// }

// function main(){
//     console.log("hello worlddddd");
// }

// waitFor3s(main);
// console.log("hello");

// function random(resolve){
//    setTimeout(resolve, 3000);  
// }

// let p = new Promise(random);
// // console.log(p);

// function callback(){
//     console.log("promise succeded");
// }

// p.then(callback);

// const fs = require("fs");
// function readTheFile(sendTheFinalValueHere){
//     console.log("inside read the file");
//     fs.readFile("a.txt", "utf-8", function(err, data){
//         sendTheFinalValueHere(data);
//     })
// }
// function readFile(fileName){
//     console.log("inside readfile");
//     return new Promise(readTheFile);
// }
// const p = readFile();
// function callback(contents){
//     console.log("inside callback");
//     setTimeout(() => console.log(contents), 5000);   
// }
// console.log("before then");
// p.then(callback);
// console.log("after then");




// creating our own promise class

class Promise2{
    constructor(fn){
        this.fn = fn;

        this.fn(() =>{
            this.resolve();
        })
    }
    then(callback){
        this.resolve = callback;
    }
}

function readTheFile(resolve){
    setTimeout(function () {
        console.log("callback based setTimeout completed");
        resolve();
    }, 4000)
}

function setTimeoutPromisified(){
    return new Promise2(readTheFile);
}

let p = setTimeoutPromisified();

function callback(){
    console.log("callback has been called");
}

p.then(callback);