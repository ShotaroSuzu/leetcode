//   Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// バラバラのリストをもらう
// 案1. Arrayに詰め替えてソートする
//   nodeをArrayに詰める
//   Arrayをソートする
//   順番に詰め替える
export function sortList(head: ListNode | null): ListNode | null {
  const array: ListNode[] = [];
  let node = head;
  while (node) {
    array.push(node);
    node = node.next;
  }
  array.sort((a, b) => {
    return a.val - b.val;
  });
  array.forEach((e, i, sorted) => {
    e.next = sorted[i + 1] || null;
  });
  return array[0] || null;
}
