// TS 版本
// function quickSort(array: number[], left = 0, right = array.length - 1): number[] {
//   if (left < right) {
//     let pivotIndex = pivot(array, left, right);
//     quickSort(array, left, pivotIndex - 1);
//     quickSort(array, pivotIndex + 1, right);
//   }
//   return array;
// }

// function pivot(array: number[], start = 0, end = array.length - 1): number {
//   let pivot = array[start];
//   let swapIndex = start;

//   for (let i = start + 1; i <= end; i++) {
//     if (pivot > array[i]) {
//       swapIndex++;
//       [array[swapIndex], array[i]] = [array[i], array[swapIndex]];
//     }
//   }
//   [array[start], array[swapIndex]] = [array[swapIndex], array[start]];
//   return swapIndex;
// }

// JS 版本
function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

function pivot(array, start = 0, end = array.length - 1) {
  let pivot = array[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      swapIndex++;
      [array[swapIndex], array[i]] = [array[i], array[swapIndex]];
    }
  }
  [array[start], array[swapIndex]] = [array[swapIndex], array[start]];
  return swapIndex;
}

// 示例
console.log(quickSort([4, 6, 9, 1, 2, 5, 3])); // [1, 2, 3, 4, 5, 6, 9]
