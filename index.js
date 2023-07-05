// let num1 = 115;

// function lessThanOrEqualToZero(num1) {
//     return num1 <= 0;
// }

// console.log(lessThanOrEqualToZero(- 1)); 

function animalSound(animal) {
    if (animal === "cat") {
      return "Meow!";
    } else if (animal === "dog") {
      return "Woof!";
    } else {
      return "Unknown animal!";
    }
  }

  console.log(animalSound("dog"))

  function sum(a, b) {
    return a + b;
  }

  console.log(sum(4, 5));

  function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

  console.log(evenOrOdd(34));