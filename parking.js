const n = 8;
const oneN = "CCC.C..C";
const twoN = "CC..C.C.";
function findSameSpots() {
  let counter = 0;
  if (!Number.isInteger(n) || n < 1 || n > 100) {
    return "undefined number";
  }
  arrayOne = oneN.split("");
  arrayTwo = twoN.split("");
  for (i = 0; i <= n; i++) {
    if ((arrayOne[i] === arrayTwo[i]) & (arrayOne[i] === "C")) {
      counter++;
    }
  }
  return `there were ${counter} spaces occupied both days`;
}
console.log(findSameSpots());
