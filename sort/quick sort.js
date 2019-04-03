// 递归
// 1. 基线条件
// 2. 递归条件
// 理解递归还需要了解函数的调用栈
// 递归其实也可以写成循环。比如说实现一个sum函数

function sum(arr) {
  if (arr.length === 1) {
    return arr[0]
  } else {
    return arr.shift() + sum(arr)
  }
}

console.log(sum([1,2,3,4]));


// 快速排序也利用了递归的思想和分而治之的思想，把问题简化。
// 如果数组只有一个元素就不用排序，如果两个就比较大小，如果三个就选择一个基准值，将大于这个基准值的和小于这个基准值的分别分为两个数组，然后再分别对这个两个数组进行排序
// 然后将这三个数组组合起来就得到一个排序好的数组


function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    // 定义基准值为数组的第一个值
    let pivot = arr[0];
    let smaller = arr.filter((item) => item < pivot);
    let bigger = arr.filter((item) => item > pivot);
    return Array.prototype.concat(quickSort(smaller), pivot, quickSort(bigger))
  }
}

console.log(quickSort([4, 6, 2, 9, 10]));
