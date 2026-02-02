// imports
import { winPositions } from "./boardStates";

// check-winner
export const checkWinner = (board, boardIsFull) => {
	let res = [];

	// get every win position array, position
	for (let position of winPositions) {
		// get every index of the board and check the board
		// break & move to next index if board[i] is not satisfying
		const win = position.every((i) => board[i] != null && board[i] === board[position[0]]);

		if (win) {
			// if board is full, it means there can be 2 possible positions:
			// a. nobody won
			// b. there is a win but 2 ways, diagonals
			if (boardIsFull) {
				// then store 2 win positions in [ ...a, ...b ]
				res = res.concat(position);
			} else {
				// if board is not full then
				// return one possible win position
				return position;
			}
		}
	}

	return res;
};
