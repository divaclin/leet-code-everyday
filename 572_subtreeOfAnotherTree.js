//https://leetcode.com/problems/subtree-of-another-tree/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

const traversal = (node,method) =>{
    var str = ''
    if (node!==null){
        str += method === 'preorder'  ? node.val : ''
        str += traversal(node.left,method)
        str += method === 'inorder'   ? node.val : ''
        str += traversal(node.right,method)
        str += method === 'postorder' ? node.val : ''                                   
    }
    else{
        str += '*'
    }
    return str
}


var isSubtree = function(s, t) {
    const inorderT  = traversal(t,'inorder')    
    const preorderT = traversal(t,'preorder')

    const inorderS  = traversal(s,'inorder')    
    const preorderS = traversal(s,'preorder')

    return inorderS.includes(inorderT) && preorderS.includes(preorderT)
    
};
