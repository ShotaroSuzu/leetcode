import { describe, expect, it } from "vitest";
import { ListNode, sortList } from "../sortList";
describe("sortList", () => {
  it("when given null then return empty LinkedList", () => {
    expect(sortList(null)).toBeNull();
  });
  describe('when given LinkedList then return sorted LinkedList', () => {
    it("not contain negative number", () => {
        const node3 = new ListNode(3);
        const node2 = new ListNode(1, node3);
        const node1 = new ListNode(2, node2);
        const node0 = new ListNode(4, node1);
        const result = sortList(node0);
        expect(result).toBe(node2);
        expect(result?.next).toBe(node1);
        expect(result?.next?.next).toBe(node3);
        expect(result?.next?.next?.next).toBe(node0);
      });
      it("contain negative number", () => {
        const node4 = new ListNode(0);
        const node3 = new ListNode(4, node4);
        const node2 = new ListNode(3, node3);
        const node1 = new ListNode(5, node2);
        const node0 = new ListNode(-1, node1);
        
        const result = sortList(node0);
        expect(result).toBe(node0);
        expect(result?.next).toBe(node4);
        expect(result?.next?.next).toBe(node2);
        expect(result?.next?.next?.next).toBe(node3);
        expect(result?.next?.next?.next?.next).toBe(node1);
      });
  })

});
