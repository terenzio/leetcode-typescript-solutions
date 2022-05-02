"use strict";
function connect(root) {
    if (!root)
        return root;
    const stack = [root];
    while (stack.length) {
        let prev = null;
        const nextStack = [];
        while (stack.length) {
            const curr = stack.shift();
            if (prev) {
                prev.next = curr;
            }
            prev = curr;
            if (curr.left)
                nextStack.push(curr.left);
            if (curr.right)
                nextStack.push(curr.right);
        }
        stack.push(...nextStack);
    }
    return root;
}
