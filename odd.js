isOdd = function(num) {
  if (num % 3 === 0 || num === 1) {
    return true
  } else {
    return false
  }
}

console.log(isOdd(3))
console.log(isOdd(1))
console.log(isOdd(4))