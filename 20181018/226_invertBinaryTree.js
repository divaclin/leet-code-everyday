//https://leetcode.com/problems/invert-binary-tree/submissions/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const traversal = (node) => {
    if(node){
        [node.left,node.right] = [node.right,node.left]
        traversal(node.left)
        traversal(node.right)
    }
}
var invertTree = function(root) {
    traversal(root)
    return root
};
