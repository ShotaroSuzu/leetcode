const numbers = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);

// 正攻法
// 1. 内側の配列内でダブりがないか確認
// 2. 内側の配列の要素が同じものにダブりがないか確認
// 3. 3*3の区切りでダブりがないか確認
export function isValidSudoku(board: string[][]): boolean {
	return isRowUnique(board) && isColumUnique(board) && isBoxUnique(board);
}

function isRowUnique(board: string[][]) {
	return isUnique(board);
}

function isColumUnique(board: string[][]) {
	const rowColSwaped = board.reduce(
		(swaped, row, idx) => {
			swaped.forEach((swapedRow, swapedRowIndex) => {
				swapedRow[idx] = row[swapedRowIndex];
			});
			return swaped;
		},
		[[], [], [], [], [], [], [], [], []] as string[][],
	);
	return isUnique(rowColSwaped);
}

function isBoxUnique(board: string[][]) {
	const defaultEmptyNums = [
		["", "", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", ""],
	];
	const boxedSwaped = board.reduce((swaped, row, rowIndex) => {
		row.forEach((element, columnIndex) => {
			const swapedRowIndex =
				Math.floor(rowIndex / 3) * 3 + Math.floor(columnIndex / 3);
			const swapedColumnIndex = (rowIndex % 3) * 3 + (columnIndex % 3);
			swaped[swapedRowIndex][swapedColumnIndex] = element;
		});
		return swaped;
	}, defaultEmptyNums);
	return isUnique(boxedSwaped);
}

function isUnique(nums2dArray: string[][]) {
	return nums2dArray.reduce((prev, row) => {
		const nums = row.filter((e) => numbers.has(e));
		const numsSet = new Set(nums);
		return prev && nums.length === numsSet.size;
	}, true);
}
