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

function waitFor3s(resolve){
    console.log("inside a promise");
    setTimeout(resolve, 3000);
}

function main(){
    console.log("hello worlddddd");
}

waitFor3s(main);
console.log("hello");