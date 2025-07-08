function isEven(n) {
  if (n === 0) return true;
  else return isOdd(n - 1);  // 🔁 Indirect call
}

function isOdd(n) {
  if (n === 0) return false;
  else return isEven(n - 1);  // 🔁 Indirect call
}

console.log(isEven(4));  // ✅ Output: true
console.log(isOdd(5));   // ✅ Output: true