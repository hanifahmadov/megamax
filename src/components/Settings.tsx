// NPM packages
import { motion } from "framer-motion";

type Props = {
	pvpBtn: boolean;
	aiBtn: boolean;
	winner: boolean;
	board33: boolean;
	board55: boolean;
	gameStarted: boolean;

	handleResetClick: () => void;
	setPvpBtn: (i: boolean) => void;
	setAiBtn: (i: boolean) => void;
	setBoard33: (v: boolean) => void;
	setBoard55: (v: boolean) => void;
};

const Settings = ({
	pvpBtn,
	aiBtn,
	winner,
	board55,
	board33,
	gameStarted,
	handleResetClick,
	setPvpBtn,
	setAiBtn,
	setBoard33,
	setBoard55,
}: Props) => {
	// handle PvP click
	const handlePvpClick = () => {
		if (winner || gameStarted) return;
		setPvpBtn(true);
		setAiBtn(false);
	};

	// handle Ai click
	const handleAiClick = () => {
		if (winner || gameStarted) return;
		setPvpBtn(false);
		setAiBtn(true);
	};

	// handle board33 click
	const handleBoard33Click = () => {
		if (board33 || winner || gameStarted) return;
		// dont if
		// board33 is already selected
		// winner is present
		// game has already staarted

		setBoard33(true);
		// select board33

		setBoard55(false);
		// de-select board55
	};

	// handle board55 click
	const handleBoard55Click = () => {
		if (board55 || winner || gameStarted) return;
		// dont if
		// board33 is already selected
		// winner is present
		// game has already staarted

		setBoard55(true);
		// select board33

		setBoard33(false);
		// de-select board55
	};

	return (
		<div className='settings flex gap-2 flex-col justify-center items-center font-semibold select-none'>
			{/* Reset */}
			<motion.div
				whileTap={{ scale: 1.01 }}
				onClick={handleResetClick}
				className={`border-2 border-black/20 
                            px-4 py-2 w-full text-center
                            rounded-4xl cursor-pointer
						  hover:bg-blue-100

                            `}
			>
				Reset
			</motion.div>

			{/* 3 x 3 ** 5 x 5 */}
			<div className='flex gap-1 w-full text-center'>
				<motion.div
					onClick={handleBoard33Click}
					whileTap={{ scale: 1.01 }}
					className={`border-2 border-black/20 
                            px-4 py-2 w-full text-center
                            rounded-4xl cursor-pointer
  							transition-colors duration-100 ease-in-out
							${!board33 && "hover:bg-green-200"}
							${board33 && "bg-green-400"}

                            `}
				>
					3 x 3
				</motion.div>
				<motion.div
					onClick={handleBoard55Click}
					whileTap={{ scale: 1.01 }}
					className={`border-2 border-black/20 
                            px-4 py-2 w-full text-center
                            rounded-4xl cursor-pointer
							transition-colors duration-100 ease-in-out
							${!board55 && "hover:bg-green-200"}
							${board55 && "bg-green-400"}
							
                            `}
				>
					5 x 5
				</motion.div>
			</div>

			{/* Ai vs PvP */}
			<div className='flex gap-1 w-full text-center'>
				<motion.div
					whileTap={{ scale: 1.01 }}
					onClick={handlePvpClick}
					className={`border-2 border-black/20 
                            px-4 py-2 w-full text-center
                            rounded-4xl cursor-pointer
							transition-colors duration-100 ease-in-out
							${!pvpBtn && "hover:bg-green-200"}
							${pvpBtn && "bg-green-400"}

                            `}
				>
					PvP
				</motion.div>
				<motion.div
					whileTap={{ scale: 1.01 }}
					onClick={handleAiClick}
					className={`border-2 border-black/20 
                            px-4 py-2 w-full text-center
                            rounded-4xl cursor-pointer
							transition-colors duration-100 ease-in-out
							${!aiBtn && "hover:bg-green-200"}
							${aiBtn && "bg-green-400"}

                            `}
				>
					Ai
				</motion.div>
			</div>
		</div>
	);
};

export default Settings;
