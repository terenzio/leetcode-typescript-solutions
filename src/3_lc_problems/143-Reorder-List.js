"use strict";
// Stacks
function reorderList(head) {
    const stack = [];
    while (head) {
        stack.push(head);
        head = head.next;
    }
    while (stack.length >= 3) {
        stack[0].next = stack[stack.length - 1];
        stack[stack.length - 1].next = stack[1];
        stack[stack.length - 2].next = null;
        stack.shift();
        stack.pop();
    }
}
// ListNodes
function reorderList(head) {
    var _a;
    while ((_a = head === null || head === void 0 ? void 0 : head.next) === null || _a === void 0 ? void 0 : _a.next) {
        const next = head.next;
        let penult = head.next;
        let last = head.next.next;
        while (last === null || last === void 0 ? void 0 : last.next) {
            penult = last;
            last = last.next;
        }
        head.next = last;
        last.next = next;
        penult.next = null;
        head = head.next.next;
    }
}
