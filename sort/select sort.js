// 选择排序 每次选出最小的元素,交换最小元素的当前元素的位置
function selectSort(arr) {
  let round = arr.length - 1;
  for (let i = 0; i < round; i++) {
    // 每一次都要找，出最小的一个数组放到新的数组中去，不是每次都找到一个最小的，因为有可能很多轮中都是同一个元素是最小，所以应该是交换两个元素的位置
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr;
}

const arr = [10,8,4,1,2,3,16,20];
console.log(selectSort(arr));
