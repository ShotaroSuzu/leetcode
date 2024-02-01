import { describe, expect, it } from "vitest";
import { isValid } from "../validParentheses";

describe("validParentheses", () => {
	describe("valid cases", () => {
		it("when nested return true", () => {
			expect(isValid("({[]})")).toBe(true);
		});
		it("when not nested return true", () => {
			expect(isValid("(){}[]")).toBe(true);
		});
	});
	describe("invalid cases", () => {
		it("when close different parentheses return false", () => {
			expect(isValid("(]")).toBe(false);
		});
		it("when do not close return false", () => {
			expect(isValid("(")).toBe(false);
		});
		it("when do not open return false", () => {
			expect(isValid("]")).toBe(false);
		});
	});
});
