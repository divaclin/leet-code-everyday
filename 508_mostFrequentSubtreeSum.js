//https://leetcode.com/problems/most-frequent-subtree-sum/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
//global is for node env,use window in normal case
const traversal = (node) => {
    if(!node){
       return 0
    }
    else{
        node.val += (!node.left && !node.right)
                    ? 0
                    : traversal(node.left)+traversal(node.right)
       
        //find max counts and push sum into hashmap
        var key = `${node.val>=0?'+':''}${node.val}`
        if(global.hashMap[key]){
            global.hashMap[key]['count']+=1
        }
        else{
            global.hashMap[key] = {key:node.val,count:1}
        }
        
        global.max = global.hashMap[key]['count'] >= global.max ? global.hashMap[key]['count'] : global.max
        
        return node.val
    }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    global.hashMap = []
    global.max = 0
    traversal(root)
    return Object.values(global.hashMap).filter((element)=>{return element['count']===max})
                                       .reduce((prev,current)=>{
                                           prev.push(current['key'])
                                           return prev
                                       },[])
    
};
