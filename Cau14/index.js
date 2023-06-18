// Use array destructuring, recursion, and the rest/spread operators
function double(arr) {
  if (arr.length === 0) {
    return [];
  }
  const [first, ...rest] = arr;
  const doubled = first * 2;
  return [doubled, ...double(rest)];
}

const result = double([1, 2, 3]);
console.log(result);
