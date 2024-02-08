import { describe, expect, it } from "vitest";
import { trailingZeroes } from "../factorialTrailingZeroes";

describe("trailingZeroes", () => {
    it.each([
        { given: 0, expected: 0 },
        { given: 4, expected: 0 },
        { given: 5, expected: 1 },
        { given: 10, expected: 2 },
        { given: 11, expected: 2 },
        { given: 25, expected: 6 },
      ])("when $given then return $expected", ({ given, expected }) => {
        expect(trailingZeroes(given)).toBe(expected);
      });

});
