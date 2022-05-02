"use strict";
// TS
// Runtime: 100 ms, faster than 87.50% of TypeScript online submissions for Linked List in Binary Tree.
// Memory Usage: 46.1 MB, less than 37.50% of TypeScript online submissions for Linked List in Binary Tree.
const checkPath = (listItem, node) => {
    if (!listItem)
        return true;
    if (listItem.val !== (node === null || node === void 0 ? void 0 : node.val))
        return false;
    const left = checkPath(listItem.next, node.left);
    const right = checkPath(listItem.next, node.right);
    return left || right;
};
function isSubPath(head, root) {
    if (!root)
        return false;
    if (root.val === (head === null || head === void 0 ? void 0 : head.val) && checkPath(head, root))
        return true;
    const left = isSubPath(head, root.left);
    const right = isSubPath(head, root.right);
    return left || right;
}
// JS
// Runtime: 100 ms, faster than 82.67% of JavaScript online submissions for Linked List in Binary Tree.
// Memory Usage: 45.2 MB, less than 84.00% of JavaScript online submissions for Linked List in Binary Tree.
// const checkPath = (listItem, node) => {
//   if (listItem === null) return true;
//   if (listItem.val !== node?.val) return false;
//   const left = checkPath(listItem.next, node.left);
//   const right = checkPath(listItem.next, node.right);
//   return left || right;
// };
// var isSubPath = function (head, root) {
//   if (!root) return false;
//   if (root.val === head?.val && checkPath(head, root)) return true;
//   const left = isSubPath(head, root.left);
//   const right = isSubPath(head, root.right);
//   return left || right;
// };
