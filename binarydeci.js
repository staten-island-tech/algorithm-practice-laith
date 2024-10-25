function deciBin(num) {
  let binary = [];
  while (num >= 1) {
    let remainder = num % 2;
    num = num / 2;
    num = Math.floor(num);
    if (remainder === 1) {
      binary.push(1);
    } else {
      binary.push(0);
    }
  }
  return binary.reverse().join("");
}

function binDeci(binary) {
  let decimal = 0;
  for (i = 0; i < binary.length; i++) {
    if (binary[binary.length - i - 1] === "1") {
      decimal += Math.pow(2, i);
    }
  }
  return decimal;
}

console.log(binDeci("101101"));
console.log(deciBin(9));
