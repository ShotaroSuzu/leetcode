import { describe, expect, it } from "vitest";
import { isValidSudoku } from "../validSudoku";

describe("isValideSudoku", () => {
	it("no number return ture", () => {
		const board = [
			[".", ".", ".", ".", ".", ".", ".", ".", "."],
			[".", ".", ".", ".", ".", ".", ".", ".", "."],
			[".", ".", ".", ".", ".", ".", ".", ".", "."],
			[".", ".", ".", ".", ".", ".", ".", ".", "."],
			[".", ".", ".", ".", ".", ".", ".", ".", "."],
			[".", ".", ".", ".", ".", ".", ".", ".", "."],
			[".", ".", ".", ".", ".", ".", ".", ".", "."],
			[".", ".", ".", ".", ".", ".", ".", ".", "."],
			[".", ".", ".", ".", ".", ".", ".", ".", "."],
		];
		expect(isValidSudoku(board)).toBe(true);
	});
	it("no duplication return ture", () => {
		const board = [
			["5", "3", ".", ".", "7", ".", ".", ".", "."],
			["6", ".", ".", "1", "9", "5", ".", ".", "."],
			[".", "9", "8", ".", ".", ".", ".", "6", "."],
			["8", ".", ".", ".", "6", ".", ".", ".", "3"],
			["4", ".", ".", "8", ".", "3", ".", ".", "1"],
			["7", ".", ".", ".", "2", ".", ".", ".", "6"],
			[".", "6", ".", ".", ".", ".", "2", "8", "."],
			[".", ".", ".", "4", "1", "9", ".", ".", "5"],
			[".", ".", ".", ".", "8", ".", ".", "7", "9"],
		];
		expect(isValidSudoku(board)).toBe(true);
	});
	describe("exsisting duplication", () => {
		it("duplication exists in row return false", () => {
			const board = [
				["5", "3", "5", ".", "7", ".", ".", ".", "."],
				["6", ".", ".", "1", "9", "5", ".", ".", "."],
				[".", "9", "8", ".", ".", ".", ".", "6", "."],
				["8", ".", ".", ".", "6", ".", ".", ".", "3"],
				["4", ".", ".", "8", ".", "3", ".", ".", "1"],
				["7", ".", ".", ".", "2", ".", ".", ".", "6"],
				[".", "6", ".", ".", ".", ".", "2", "8", "."],
				[".", ".", ".", "4", "1", "9", ".", ".", "5"],
				[".", ".", ".", ".", "8", ".", ".", "7", "9"],
			];
			expect(isValidSudoku(board)).toBe(false);
		});
		it("duplication exists in column return false", () => {
			const board = [
				["5", "3", ".", ".", "7", ".", ".", ".", "."],
				["6", ".", ".", "1", "9", "5", ".", ".", "."],
				[".", "9", "8", ".", ".", ".", ".", "6", "."],
				["5", ".", ".", ".", "6", ".", ".", ".", "3"],
				["4", ".", ".", "8", ".", "3", ".", ".", "1"],
				["7", ".", ".", ".", "2", ".", ".", ".", "6"],
				[".", "6", ".", ".", ".", ".", "2", "8", "."],
				[".", ".", ".", "4", "1", "9", ".", ".", "5"],
				[".", ".", ".", ".", "8", ".", ".", "7", "9"],
			];
			expect(isValidSudoku(board)).toBe(false);
		});
		it("duplication exists in 3*3 box return false", () => {
			const board = [
				["5", "3", ".", ".", "7", ".", ".", ".", "."],
				["6", ".", ".", "1", "9", "5", ".", ".", "."],
				[".", "5", "8", ".", ".", ".", ".", "6", "."],
				[".", ".", ".", ".", "6", ".", ".", ".", "3"],
				["4", ".", ".", "8", ".", "3", ".", ".", "1"],
				["7", ".", ".", ".", "2", ".", ".", ".", "6"],
				[".", "6", ".", ".", ".", ".", "2", "8", "."],
				[".", ".", ".", "4", "1", "9", ".", ".", "5"],
				[".", ".", ".", ".", "8", ".", ".", "7", "9"],
			];
			expect(isValidSudoku(board)).toBe(false);
		});
	});
});
