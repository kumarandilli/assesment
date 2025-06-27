function findUniqueElements(arr1, arr2) {
  // Convert arrays to Sets for faster lookups
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const unique = [];

  // Elements in arr1 but not in arr2
  for (let item of set1) {
    if (!set2.has(item)) {
      unique.push(item);
    }
  }

  // Elements in arr2 but not in arr1
  for (let item of set2) {
    if (!set1.has(item)) {
      unique.push(item);
    }
  }

  return unique;
}

// Example usage
const result = findUniqueElements([1, 2, 3], [2, 4, 5]);
console.log(result); // Output: [1, 3, 4, 5]
