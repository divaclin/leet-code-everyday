//https://leetcode.com/problems/middle-of-the-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const listLength = (head) => {
    let count = 0
    while(head){
        count++
        head = head.next
    }
    return count
}
var middleNode = function(head) {
    const mid = parseInt(listLength(head)/2)
    let count = 0
    while(count<mid){
        head = head.next
        count++
    }
    return head
};
