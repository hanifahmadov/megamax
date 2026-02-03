// imports
import { winPositions } from "./boardStates";

// check-winner
export const checkWinner = (board, boardIsFull) => {
	let res = [];

	// check every win position array
	for (let position of winPositions) {
		// get first position
		const first = board[position[0]];

		// skip this position if the first value is null
		if (first == null) continue;

		let win = true;

		// check if all values in this position match the first one
		for (let i of position) {
			if (board[i] !== first) {
				win = false;
				break;
			}
		}

		if (win) {
			if (boardIsFull) {
				// store multiple win positions if board is full
				res = res.concat(position);
			} else {
				// return one win position if board is not full
				return position;
			}
		}
	}

	return res;
};
