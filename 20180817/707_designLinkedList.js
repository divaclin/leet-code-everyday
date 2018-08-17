//https://leetcode.com/problems/design-linked-list/description/
const createNode = (val=0) => {
    return {
        val:val,
        next:null
    }
}
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head   = null
    this.length = 0
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    var node  = this.head 
    if(index>=0 && index<this.length){
        while(index>0){
          node = node.next
          index--  
        }
        return node ? node.val : -1
    }
    else{
        return -1
    }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var now = createNode(val)
    if(this.head){
       now.next  = this.head
    }
    this.head = now
    this.length++
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    var node = this.head
    while(node.next){
        node = node.next
    }
    node.next = createNode(val)
    this.length++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index>0 && index<=this.length){
       var insert = createNode(val)
       var node  = this.head
       while(index>1){
          node = node.next
          index--
       } 
       insert.next = node.next
       node.next   = insert 
       this.length++
    }
    else if(index===0){
       var now = createNode(val)
       if(this.head){
          now.next  = this.head
       }
       this.head = now
       this.length++
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
     if(index>=0 && index<this.length && this.head){
         if(index===0){
            this.head = this.head.next
         }
         else{
             var node  = this.head
             while(index>1){
               node = node.next
               index--              
             }
             node.next = node.next.next
                       ? node.next.next
                       : null       
         }
         this.length--
     }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
