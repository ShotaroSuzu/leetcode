import { describe, expect, it } from "vitest";
import { ListNode, hasCycle } from "../linkedListCycle";
describe("hasCicle", () => {
  describe("when cycle then return true", () => {
    describe("cycle position", () => {
      describe("from begin to end", () => {
        describe("list size", () => {
          it("size is one", () => {
            const node = new ListNode(0);
            node.next = node;
            expect(hasCycle(node)).toBe(true);
          });
          it("size is two", () => {
            const node0 = new ListNode(0);
            const node1 = new ListNode(1, node0);
            node0.next = node1;
            expect(hasCycle(node0)).toBe(true);
          });
        });
      });
      it("from middle to end", () => {
        const node2 = new ListNode(2);
        const node1 = new ListNode(1, node2);
        const node0 = new ListNode(0, node1);
        node2.next = node1;
        expect(hasCycle(node0)).toBe(true);
      });
      it("from begin to middle", () => {
        const node2 = new ListNode(2);
        const node1 = new ListNode(1, node2);
        const node0 = new ListNode(0, node1);
        node1.next = node0;
        expect(hasCycle(node0)).toBe(true);
      });
      it("from middle to middle", () => {
        const node3 = new ListNode(3);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        const node0 = new ListNode(0, node1);
        node2.next = node1;
        expect(hasCycle(node0)).toBe(true);
      });
    });
  });
  describe("when non cycle then return false", () => {
    it("size is one", () => {
      const node = new ListNode(0);
      expect(hasCycle(node)).toBe(false);
    });
    it("size is two", () => {
      const node0 = new ListNode(0);
      const node1 = new ListNode(1, node0);
      expect(hasCycle(node0)).toBe(false);
    });
  });
});
