function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
var addTwoNumbers = function (l1, l2) {
    var a = buildNumber(l1);
    var b = buildNumber(l2);
    var result = a + b;
    return buildLinkedList(result);
};

function buildNumber(firstNode) {
    let current = firstNode, number = 0, power = 0;
    while (current != null) {
        number += current.val * Math.pow(10, power);
        current = current.next;
        power += 1;
    }
    return number;
}

function buildLinkedList(number) {
    let prev, head = new ListNode(0, undefined), node;
    while (number != 0) {
        let digit = number % 10;
        console.log(digit);
        node = new ListNode(digit, undefined);
        if (prev === undefined) {
            prev = node;
            head = node;
        } else {
            prev.next = node;
            prev = node;
        }
        number = Math.trunc(number / 10);
    }
    return head;
}

let l1 = new ListNode(2, new ListNode(4, new ListNode(3, undefined)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4, undefined)));