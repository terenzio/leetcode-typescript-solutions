"use strict";
function reverseBetween(head, left, right) {
    const dummy = new ListNode(-1, head);
    let prev = dummy;
    let curr = head;
    let i = 1;
    while (curr && i < left) {
        prev = curr;
        curr = curr.next;
        i++;
    }
    const reverseHead = reverseBetweenHelper(curr, right - left + 1);
    prev.next = reverseHead;
    return dummy.next;
}
const reverseBetweenHelper = (head, steps) => {
    let prev = null;
    let curr = head;
    while (curr && steps) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        steps--;
    }
    head.next = curr;
    return prev;
};
