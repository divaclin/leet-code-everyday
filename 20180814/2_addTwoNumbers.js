//https://leetcode.com/problems/add-two-numbers/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
global.result = []
const findLength = (linkedList) => {
    return linkedList ? 1+findLength(linkedList.next) : 0
}
const add = (main,second,carry=0) => {
    var node = {
        val:0,
        next:null
    }
    
    if(second){
        var sum   = main.val+second.val+carry
        node.val  = sum%10
        node.next = add(main.next,second.next,parseInt(sum/10))
        global.result.unshift(node.val)
    }
    else if(main){
        var sum   = main.val+carry
        node.val  = sum%10
        node.next = add(main.next,null,parseInt(sum/10))
        global.result.unshift(node.val)
    }
    else if(carry>0){
        node.val  = carry
        node.next = null 
        global.result.unshift(node.val)
    }
    else{
        node = null
    }
    return node
}

var addTwoNumbers = function(l1, l2) {
    var main   = findLength(l1) >= findLength(l2) ? l1 : l2
    var second = findLength(l1) >= findLength(l2) ? l2 : l1
    global.result = []
    add(main,second)
    return global.result
};
