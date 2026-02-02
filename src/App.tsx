// NPM packages
import React, { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { produce } from "immer";

// state imports
import { boardDefault } from "./helpers/boardStates";

// helpers
import { makePvP_move } from "./helpers/makeMove";
import { makeAi_move } from "./helpers/makeMove";
import { checkWinner } from "./helpers/checkWinner";

// css imports
import "./App.css";

// comps
import Board_3by3 from "./components/Board_3by3";
import Settings from "./components/Settings";
import Header from "./components/Header";

function App() {
	// Board States
	// board reset
	const resetBoard = useResetRecoilState(boardDefault);
	//board
	const [board, setBoard] = useRecoilState(boardDefault);
	// board 3by3 and 5by5
	const [board33, setBoard33] = useState<boolean>(true);
	const [board55, setBoard55] = useState<boolean>(false);

	const [winner, setWinner] = useState<boolean>(false);
	const [winIndex, setWinIndex] = useState<number[]>([]);
	const [gameStarted, setGameStarted] = useState<boolean>(false);

	const [resetBtn, setResetBtn] = useState(true);
	const [pvpBtn, setPvpBtn] = useState(true);
	const [aiBtn, setAiBtn] = useState(false);

	const [turn, setTurn] = useState(1);
	const [moves, setMoves] = useState(0);
	const [analyzing, setAnalyzing] = useState(false);

	// handle Reset click
	const handleResetClick = () => {
		// Reset all to default
		resetBoard();
		setTurn(1);
		setWinner(false);
		setWinIndex([]);
		setGameStarted(false);
		setMoves(0);
		setAnalyzing(false);
	};

	const handleCellClick = (e: any) => {
		// stop if winner is true
		if (winner) return;

		// if game started block any click on settings buttons
		//  no Ai or PvP button click but Reset
		setGameStarted(true);

		// get the id of the clicked cell
		const cellId = Number(e.target.id);

		// no action on full cell
		if (board[cellId] !== null) return;

		// person vs person
		if (pvpBtn) makePvP_move(board, setBoard, turn, setTurn, cellId);

		// person vs ai (minimax)
		if (aiBtn) makeAi_move(board, setBoard, turn, setTurn, cellId);
	};

	// Analyze the board on every move
	useEffect(() => {
		// stop all actions if there is a winner
		if (winner) return;

		// if board is full
		const isFull = !board.some((val) => val == null);

		// check if there is a win position
		const checker = checkWinner(board, isFull);

		// If there is a win position
		if (checker.length) {
			// set winner and stop all actions on the board
			setWinner(true);

			// setWinIndex(checker);
		}
	}, [board]);

	return (
		<div className='flex flex-col justify-center items-center gap-15'>
			<div className='wrapper-top flex flex-col gap-5 w-full'>
				<Header />
				<Settings
					handleResetClick={handleResetClick}
					aiBtn={aiBtn}
					pvpBtn={pvpBtn}
					winner={winner}
					board33={board33}
					board55={board55}
					gameStarted={gameStarted}
					setAiBtn={setAiBtn}
					setPvpBtn={setPvpBtn}
					setBoard33={setBoard33}
					setBoard55={setBoard55}
				/>
			</div>
			<div>
				{board33 && (
					<Board_3by3 board={board} winner={winner} winIndex={winIndex} handleCellClick={handleCellClick} />
				)}

				{board55 && <div>Hello World</div>}
			</div>
		</div>
	);
}

export default App;
