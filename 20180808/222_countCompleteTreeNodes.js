//https://leetcode.com/problems/count-complete-tree-nodes/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


const recursive = (node) => {
    var count = 0
    if(node!==null){
        count+=1
        count+=recursive(node.left)
        count+=recursive(node.right)
    }
    else{
        return 0;
    }
    return count;
}


/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    return recursive(root)
};
