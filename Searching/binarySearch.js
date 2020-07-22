// using iterations
const binarySearch = (arr, key) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (key === arr[mid]) {
      return mid;
    } else if (key > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return "Key is not in array";
};

// using recursion

const recursiveBinarySearch = (arr, key, low = 0, high = arr.length - 1) => {
  let mid = Math.floor((low + high) / 2);
  if (low > high) {
    return "Not found";
  } else if (key === arr[mid]) {
    return mid;
  } else if (key > arr[mid]) {
    return recursiveBinarySearch(arr, key, mid + 1, high);
  } else {
    return recursiveBinarySearch(arr, key, low, mid - 1);
  }
};

// console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5, 0, 7));




console.log(recursiveBinarySearch([1,2,3,4,5,5,7,8], 5))