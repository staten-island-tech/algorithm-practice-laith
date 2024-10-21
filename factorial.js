number = 6.5;
let product = 1;
function factorial(number) {
  if (number < 0) {
    return "undefined number";
  } else if ((number = 0)) {
    product = 1;
  } else if (!Number.isInteger(number)) {
    return "undefined number";
  } else if (typeof value !== "number") {
    return "not a number";
  } else {
    for (i = 1; i <= number; i++) {
      product *= i;
    }
  }
  return product;
}
console.log(factorial(number));
