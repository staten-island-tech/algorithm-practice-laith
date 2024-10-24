function valueCheck(num, binary) {
  if (num === 0) {
    return binary;
  }
}

function deciBin(num) {
  let binary = "";
  while (num >= 1) {
    remainder = num % 2;
    num = num / 2;
    if ((remainder = 1)) {
      binary += 1;
    } else {
      binary += 0;
    }
  }
  return binary.toString().reverse();
}
