// let num1 = 115;

// function lessThanOrEqualToZero(num1) {
//     return num1 <= 0;
// }

// console.log(lessThanOrEqualToZero(- 1)); 

// function animalSound(animal) {
//     if (animal === "cat") {
//       return "Meow!";
//     } else if (animal === "dog") {
//       return "Woof!";
//     } else {
//       return "Unknown animal!";
//     }
//   }

//   console.log(animalSound("dog"))

//   function sum(a, b) {
//     return a + b;
//   }

//   console.log(sum(4, 5));

//   function evenOrOdd(number) {
//     if (number % 2 === 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
//   }

//   console.log(evenOrOdd(34));

// printNumbers(10)

// function printNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//       console.log(i);
//     }
//   }


//   function printEvenNumbers(num) {
//     for (let num = 1; num <= 100; num++) {
//         if (num % 2 === 0) {
//         console.log(num)
//     }
//   }
// }

//   printEvenNumbers(10)

// // Exercise 3: Calculate Sum
// // Write a function called calculateSum that takes a number 
// // as a parameter and calculates 
// // the sum of all the numbers from 1 to that number. 
// // Return the sum.
// // calcSum(10)

// function calcSum(num) {
//     for (let num = 1; num <= 20; num++) {
//    console.log(calcSum);
//     }
// }


// let count = 1

// while (count <= 100) {
// console.log(count)
// count = count + 1
// }

// for (let i = 1; i <= 20; i++){
//    if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} --> FrontendSimplified`)
//     }
//     else if (i % 3 === 0) {
//         console.log(`${i} --> frontend`)
//     }
//     else if (i % 5 === 0) {
//         console.log(`${i} --> simplified`)
//     }
    
//     else (console.log(`${i} --> ${i}`))
// }

// let str = "Frontend Simplified"

// for (i = 0; i <= str.length; i++) {
//     console.log(str[i])
// }

// function welcomeNameToFes(name, age) {
//     console.log(`Welcome ${name} ${25} to FES`)
//     // console.log(name)
// }

// welcomeNameToFes('David', '25');


// function fn() {
//     return 5
//     console.log('my function')
// }

// console.log(5);

// function sumOfTwoNumbers (a, b) {
// return a + b
// }

// console.log(sumOfTwoNumbers(cat, 100));


// function convertCToF(C) {
//     return (C * 1.8) + 32
// }

// console.log(convertCToF(10));

// function add(a, b) {
// return a + b 
// }

// console.log(add(7, 3));

// let fruits = ['apple', 'pear', 'peach', 'strawberry', 'blueberry'];

// console.log(fruits[4])

// let groceries = ['potatoe', 'melon', 'avocados', 'dates', 'bread']

// console.log(groceries[2])

// console.log(groceries.length-1)

// let x = "apple"

// console.log(x.length);

// groceries.push('fig');

// console.log(groceries);

// groceries.filter(() => {})

let grades1 = ['A+', 'A', 'FAIL']

let newgrades = grades1.filter((element) => {
    console.log(element) 
    if (element) != 'FAIL'
    return true;
});

console.log(newgrades)