class Calculator {
  constructor(calculator) {
    this.calculator = 0
  }
getCurrentState () {
  return this.calculator
}

addInputs(...numbers) {
  let sum = 0;
  for(let number of numbers){
    sum+= number;
  }
  this.calculator = sum;
  return sum;
}

multiplyInputs(...numbers) {
  let product = 1;
  for(let number of numbers){
    product *= number;
  }
  return product
}

divideInputs(x, y){
 if(y === undefined){
  return x
 } else {
  return x /y
 }
}

subtractInputs(...numbers){
  let difference = numbers[0];
  for(let i = 1; i < numbers.length; i++){
    difference -= numbers[i]
  }
  return difference
}

toPower(base, exponent) {
  let result = base ** exponent
  return result
}

squareRoot(number) {
  let result = Math.sqrt(number)
  return parseFloat(result.toFixed(2))
}

clearCurrentStatus () {
    this.calculator = 0
    return true
  }

negPosReversal (number) {
  return -number
}

}

// function findDifference(numbers) {
//   if (!numbers || numbers.length < 2) {
//     return "Please provide at least two numbers.";
//   }
//   let difference = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     difference -= numbers[i];
//   }
//   return difference;
// }

// // Example usage:
// const numbers1 = [10, 2, 3];
// console.log(findDifference(numbers1)); // Output: 5

// const numbers2 = [15, 4, 2, 1];
// console.log(findDifference(numbers2)); // Output: 8

// const numbers3 = [5];
// console.log(findDifference(numbers3)); // Output: Please provide at least two numbers.






module.exports = Calculator