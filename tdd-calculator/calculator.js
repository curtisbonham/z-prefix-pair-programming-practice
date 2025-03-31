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


module.exports = Calculator