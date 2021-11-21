// alert("Hello World")

// document.writeln("Hello P512")


// firstname = "Togrul";


// var, let, const


// var surname = "Aliyev";
// var surname = "Gulmammadov"

// let num = 5;

// let num1 = 6;

// const name1 = "Rijat";
// name1 = "Ali"

// const name1 = "Kanan"




// let firstname;
// console.log(firstname);


// let number = 5;

// let string = "Sama";

// let bool = true;

// let nullable = null;

// let undefined1 = undefined;

// let bigint = 1238213 n;


// console.log(typeof typeof number);
// console.log(typeof typeof string);
// console.log(typeof typeof bool);
// console.log(typeof typeof nullable);
// console.log(typeof typeof undefined1);


// let obj = {
//     firstname: "Chimnaz",
//     surname: "Mammadova",
//     age: 30
// }


// let string = 5;


// console.log(typeof string);



// console.log(name1);


// let num = 5;
// let num2 = 10;

// let num3 = "5"


// console.log(num !== num3);



// console.log(++num);
// console.log(++num2);


// num += num2; // num= num +num2

// console.log("Ali" + " " + "Aliyev");


// console.log(num);

// console.log(5 / 0);

let positive = true;

let negative = false;

let posit = true;


// if (!positive || !(negative || !negative || !positive)) {
//     console.log("Hello");
// } else {
//     console.log("world");
// }

// if (!positive) {
//     console.log("okay");
// } else {
//     console.log("not okay");
// }


// console.log(positive ? "okay" : "not okay");

// let age = 16;

// switch (age) {
//     case 13:
//     case 16:
//         console.log("you are under 18(case 13)");
//         console.log("you are under 18(case 16)");
//         break;

//     case 18:
//         console.log("you are 18(case 18)");
//         break;

//     default:
//         console.log("Please enter valid age");
//         break;
// }


let arr = [1, 5, 7, 19, "Togrul", null, undefined]

// for (let i = 0; i < arr.length; i++) {
//     if (i >= 0) {
//         continue;
//     }
//     console.log(arr[i]);

// }


//infinite loop-dont try at home
// for (;;) {
//     console.log("infinite");
// }

let number = 0;

// while (number < 100) {
//     console.log("loading..");
//     number++;
// }
// console.log("done");


//infinite loop
// while (true) {

// }


// do {
//     console.log("okay");
// } while (number != 0);



// try {
//     const num123 = 18;
//     num123 = 19;
//     console.log("okay");
// } catch (error) {
//     console.log(error);
// } finally {
//     console.log("This code block does not care about any code block");
// }


// Falsey: 0, empty string,null,undefined,NaN
// Truthy: infinity,any character in string


// if (NaN) {
//     console.log("its truthy");
// } else {
//     console.log("falsey");
// }

// "" && console.log("first");
// 5 && "" && console.log("second");
// "" || console.log("third");
// undefined && true || console.log("fourth");
// 19 && false || console.log("fifth");


//Functions

function Test(word = "Rijat", surname) {
    console.log(word, surname);
}

Test("Togrul");