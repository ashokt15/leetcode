function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
var addTwoNumbers = function (l1, l2) {
    let current1 = l1, current2 = l2, prev, head, carryForward = 0;
    while (current1 != null || current2 != null || carryForward == 1) {
        let a = current1 ? current1.val : 0;
        let b = current2 ? current2.val : 0;
        let number = a + b + carryForward;

        if (number > 9) {
            carryForward = 1;
            number = number % 10;
        } else {
            carryForward = 0;
        }
        node = new ListNode(number, undefined);
        if (prev === undefined) {
            prev = node;
            head = node;
        } else {
            prev.next = node;
            prev = node;
        }
        current1 = current1 === null ? current1 : current1.next;
        current2 = current2 === null ? current2 : current2.next;
    }
    return head;
};
let l1 = new ListNode(2, new ListNode(4, new ListNode(3, undefined)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4, undefined)));