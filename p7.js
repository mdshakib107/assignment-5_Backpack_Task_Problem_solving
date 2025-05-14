const numbers = [1, 2, 3, 2, 4, 3, 5];

function getUniqueValues(arr) {
  return [...new Set(arr)];
}

console.log(getUniqueValues(numbers)); 