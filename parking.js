const n = 5;
const oneN = "C...C";
const twoN = "CC..C";
function findSameSpots() {
  let counter = 0;
  if (!Number.isInteger(n) || n < 1 || n > 100) {
    return "undefined number";
  }
  arrayOne = oneN.split("");
  arrayTwo = twoN.split("");
  for (i = 0; i <= n; i++) {
    if (arrayOne[i] === arrayTwo[i]) counter += 1;
  }
  return `there were ${counter} spaces occupied both days`;
}
console.log(findSameSpots);
