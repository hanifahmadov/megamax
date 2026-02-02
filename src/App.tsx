// NPM packages
import React, { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { produce } from "immer";

// state imports
import { boardDefault } from "./helpers/boardStates";

// helpers
import { makePvP_move } from "./helpers/makeMove";
import { makeAi_move } from "./helpers/makeMove";

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
	const [board33, setBoard33] = useState(true);
	const [board55, setBoard55] = useState(false);

	const [winner, setWinner] = useState(false);
	const [winIndex, setWinIndex] = useState<number[]>([]);
	const [gameStarted, setGameStarted] = useState(false);

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
				<Board_3by3 board={board} winner={winner} winIndex={winIndex} handleCellClick={handleCellClick} />{" "}
			</div>
		</div>
	);
}

export default App;
