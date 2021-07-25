const ls = [1, 5, 6, 8, 9, 7, 5, 45, 7, 678, 9, 890, 1, 23];
function quickSort(list) {
  if (list.length <= 1) return list;
  let pivotIndex = Math.floor(list.length / 2);
  let pivot = list.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  list.forEach((item) => {
    if (item < pivot) left.push(item);
    else right.push(item);
  });

  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort(ls));
