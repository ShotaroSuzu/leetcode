/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
 export function hasCycle(head: ListNode | null): boolean {
    const existingVals = new Set();
    let currentNode = head
    while (!!currentNode && currentNode.next !== null) {
        if (existingVals.has(currentNode)) {
            return true;
        }
        existingVals.add(currentNode)
        currentNode = currentNode.next
    }
    return false;

};