//https://leetcode.com/problems/binary-tree-paths/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
global.list =[]

const path = (node,current=null) =>{
    if(node){
        if(!node.left&&!node.right){
            global.list.push(current+node.val+'')
        }
        else{
            path(node.left ,current+node.val+'->')        
            path(node.right,current+node.val+'->')   
        }
    }
}

var binaryTreePaths = function(root) {
    global.list =[]
    path(root)
    return global.list
};
