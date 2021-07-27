/**
 * 寻找两个正序数组的中位数
 */

let a = [2, 1, 3];
let b = [6, 4, 5];
/** 如果是个乱序的，则首先进行一个排序 */
a = a.sort((i, j) => i - j);
b = b.sort((i, j) => i - j);

// let findMedianSortedArrays = (nums1, nums2) => {
//   if (!nums1.length && !nums2.length) return;

//   if (!nums1.length) {
//     /** nums1 为空，且 nums 2 只有一个元素，直接返回 */
//     if (nums2.length === 1) return nums2[0];
//     /** 否则比较 nums2，取中位数。采用二分法 */
//     let half = Math.floor(nums2.length / 2);
//     return findMedianSortedArrays(nums2.slice(0, half), nums2.slice(half));
//   }

//   if (!nums2.length) {
//     if (nums1.length === 1) return nums1[0];
//     let half = Math.floor(nums1.length / 2);
//     return findMedianSortedArrays(nums1.slice(0, half), nums1.slice(half));
//   }

//   /** 判断两个数组是否都只有一个元素 */
//   if (nums1.length === 1 && nums2.length === 1) {
//     return nums1[0] === nums2[0] ? nums1[0] : (nums1[0] + nums2[0]) / 2;
//   }

//   /** 比较两个数组的最小值，丢弃最小值 */
//   nums1[0] < nums2[0] ? nums1.shift() : nums2.shift();

//   if (!nums1.length) {
//     nums2.pop();
//     return findMedianSortedArrays(nums1, nums2);
//   }

//   if (!nums2.length) {
//     nums1.pop();
//     return findMedianSortedArrays(nums1, nums2);
//   }

//   /** 判断最后一位，切掉最大值数组中的最后一位 */
//   nums1[nums1.length - 1] > nums2[nums2.length - 1] ? nums1.pop() : nums2.pop();
//   return findMedianSortedArrays(nums1, nums2);
// };

let findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  const m = nums1.length;
  const n = nums2.length;
  let low = 0;
  let high = m;
  while (low <= high) {
    const i = low + Math.floor((high - low) / 2);
    const j = Math.floor((m + n + 1) / 2) - i;

    const maxLeftA = i === 0 ? -Infinity : nums1[i - 1];
    const minRightA = i === m ? Infinity : nums1[i];
    const maxLeftB = j === 0 ? -Infinity : nums2[j - 1];
    const minRightB = j === n ? Infinity : nums2[j];
    console.log(maxLeftA, minRightA, maxLeftB, minRightB);

    if (maxLeftA <= minRightB && minRightA >= maxLeftB) {
      return (m + n) % 2 === 1
        ? Math.max(maxLeftA, maxLeftB)
        : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
    } else if (maxLeftA > minRightB) {
      high = i - 1;
    } else {
      low = low + 1;
    }
  }
};
console.log(findMedianSortedArrays(a, b));
