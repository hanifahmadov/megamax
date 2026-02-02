// NPM packages
import { produce } from "immer";

// Make PvP move
export const makePvP_move = (board, setBoard, turn, setTurn, cellId) => {
	if (turn == 1) {
		setBoard(
			produce((draft) => {
				draft[cellId] = "X";
			}),
		);
		setTurn(0);
	} else {
		setBoard(
			produce((draft) => {
				draft[cellId] = "O";
			}),
		);
		setTurn(1);
	}
};

// Make Ai Move
export const makeAi_move = (cellId, board, setBoard, turn, setTurn) => {
	/* make desicison whose turn X & O */
	/* if turn 1 then player X turn */
	if (turn == 1) {
		setBoard(
			produce((draft) => {
				draft[id] = "X";
			}),
		);
		setTurn(0);
	}
};
