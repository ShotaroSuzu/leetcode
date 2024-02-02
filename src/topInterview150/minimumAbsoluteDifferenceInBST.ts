import { b } from "vitest/dist/suite-MFRDkZcV";

/**
 * Definition for a binary tree node.
 */
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function getMinimumDifference(root: TreeNode | null): number {
  const { minimumDifference } = nodeToSortedArray(root, []).reduce<{
    prev: number;
    minimumDifference: number;
  }>(
    (accumulator, e, index, sortedNumbers) => {
      if (index === 0) {
        return {
          prev: e,
          minimumDifference: accumulator.minimumDifference,
        };
      }
      return {
        prev: e,
        minimumDifference: Math.min(e - accumulator.prev, accumulator.minimumDifference),
      };
    },
    { prev: Number.MIN_VALUE, minimumDifference: Number.MAX_VALUE },
  );
  return minimumDifference;
}

function nodeToSortedArray(root: TreeNode | null, numbers: number[]): number[] {
  if (root !== null) {
    nodeToSortedArray(root.left, numbers);
    numbers.push(root.val);
    nodeToSortedArray(root.right, numbers);
  }
  return numbers;
}
