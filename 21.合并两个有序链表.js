/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start

// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    let head = new ListNode();
    console.log(head);
    console.log(list1, list2);
    let cur = head;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            cur.next = list1;
            list1 = list1.next;
        } else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }
    if (list1) cur.next = list1;
    if (list2) cur.next = list2;
    console.log(head);
    return head.next;
};
mergeTwoLists([1,2,4],[1,3,4])
// console.log('merge', mergeTwoLists([1,2,4],[1,3,4]));
// @lc code=end

