// js中的indexof,includes,search的查找是采用的什么算法
function binarySearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = arr[mid];
    if (guess === value) {
      return mid
    }
    if (guess > value) {
      high = mid - 1
    }
    if (guess < value) {
      low = mid + 1
    }
  }
  return -1;
}

const arr = [1,3,5,7,9];



console.log(binarySearch(arr, 4));

