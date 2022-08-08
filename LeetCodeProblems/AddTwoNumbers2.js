// Problem: https://leetcode.com/problems/add-two-numbers/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let num1 = '';
  let num2 = '';
  if (l1 !== null) {
    let tempPtr = l1;
    while (tempPtr !== null) {
        num1 += tempPtr.val.toString();
        tempPtr = tempPtr.next;
    }
  }
  if (l2 !== null) {
    let tempPtr = l2;
    while (tempPtr !== null) {
        num2 += tempPtr.val.toString();
        tempPtr = tempPtr.next;
    }
  }

  const totalString = (BigInt(num1) + BigInt(num2)).toString();
  let listNode = null;
  for (let i = 0; i < totalString.length ; i++) {
    const tempNode = new ListNode(BigInt(totalString.charAt(i)));
    if (listNode === null) {
        listNode = tempNode;
    } else {
        tempNode.next = listNode;
        listNode = tempNode;
    }
  }
  return listNode;
};

let list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);
let list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);
console.log(addTwoNumbers(list1, list2));

