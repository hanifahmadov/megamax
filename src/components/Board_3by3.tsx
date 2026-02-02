// NPM packages
import React, { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { produce } from "immer";
import { motion, scale } from "framer-motion";

type Props = {
	board: (string | null)[];
	winner: boolean | null;
	winIndex: number[];
	handleCellClick: (e: any) => void;
};

// Board 3 x 3
const Board_3by3 = ({ board, winner, winIndex, handleCellClick }: Props) => {
	return (
		<div className='3by3_board grid grid-cols-3 gap-0 rounded-2xl overflow-hidden border-3 border-black/3 select-none'>
			{board.map((val, i) => {
				return (
					<motion.div
						whileTap={{ scale: 1.02 }}
						key={i}
						id={String(i)}
						onClick={handleCellClick}
						className={`w-24 h-24 md:w-32 md:h-32
										flex justify-center items-center 
										overflow-hidden border border-black/50
										text-5xl md:text-7xl font-nunito 

									${(i == 0 || i == 1 || i == 2) && "border-t-0"}
									${(i == 0 || i == 3 || i == 6) && "border-l-0"}
									${(i == 2 || i == 5 || i == 8) && "border-r-0"}
									${(i == 6 || i == 7 || i == 8) && "border-b-0"}

									${winner ? "cursor-not-allowed hover:bg-none " : "cursor-pointer hover:bg-blue-200"}
									${winner && winIndex.includes(i) && "bg-blue-200"}

							   	`}
					>
						{val}
					</motion.div>
				);
			})}
		</div>
	);
};

export default Board_3by3;
