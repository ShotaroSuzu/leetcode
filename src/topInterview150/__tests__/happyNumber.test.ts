import { describe, expect, it } from "vitest";
import { isHappy } from "../happyNumber";

describe("isHappy", () => {
  it("given 1 then return true", () => {
    expect(isHappy(1)).toBe(true);
  });
  describe("操作を２回以上行う場合", () => {
    describe("ループする場合", () => {
      it("given 2 then return false", () => {
        expect(isHappy(2)).toBe(false);
      });
      it("given 3 then return false", () => {
        expect(isHappy(3)).toBe(false);
      });
    });
    describe("ループしない場合", () => {
      it("given 19 then return true", () => {
        expect(isHappy(19)).toBe(true);
      });
    });
  });
});
