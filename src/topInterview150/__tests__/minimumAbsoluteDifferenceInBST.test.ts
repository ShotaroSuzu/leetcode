import { describe, expect, it } from "vitest";
import {
  TreeNode,
  getMinimumDifference,
} from "../minimumAbsoluteDifferenceInBST";

describe("getMinimumDifference", () => {
  it("０を含まないとき", () => {
    const node1 = new TreeNode(1);
    const node3 = new TreeNode(3);
    const node2 = new TreeNode(2, null, node3);
    const node6 = new TreeNode(6);
    const root = new TreeNode(4, node2, node6);
    expect(getMinimumDifference(root)).toBe(1);
  });
  it("０を含むとき", () => {
    const node0 = new TreeNode(0);
    const node12 = new TreeNode(12);
    const node49 = new TreeNode(49);
    const node48 = new TreeNode(48, node12, node49);
    const root = new TreeNode(1, node0, node48);
    expect(getMinimumDifference(root)).toBe(1);
  });
});
