import React from "react";

const Settings = () => {
	return (
		<div className='settings flex gap-2 flex-col justify-center items-center font-semibold'>
			{/* Reset */}
			<div
				className='border-2 border-black/20 
                            px-4 py-2 w-full text-center
                            rounded-4xl cursor-pointer
							hover:bg-blue-200
                            '
			>
				Reset
			</div>

			{/* 3 x 3 ** 5 x 5 */}
			<div className='flex gap-1 w-full text-center'>
				<div
					className='border-2 border-black/20 
                            px-4 py-2 w-full text-center
                            rounded-4xl cursor-pointer
							hover:bg-blue-200
                            '
				>
					3 x 3
				</div>
				<div
					className='border-2 border-black/20 
                            px-4 py-2 w-full text-center
                            rounded-4xl cursor-pointer
							hover:bg-blue-200
                            '
				>
					5 x 5
				</div>
			</div>

			{/* Ai vs PvP */}
			<div className='flex gap-1 w-full text-center'>
				<div
					className='border-2 border-black/20 
                            px-4 py-2 w-full text-center
                            rounded-4xl cursor-pointer
							hover:bg-blue-200
                            '
				>
					Ai
				</div>
				<div
					className='border-2 border-black/20 
                            px-4 py-2 w-full text-center
                            rounded-4xl cursor-pointer
							hover:bg-blue-200
                            '
				>
					PvP
				</div>
			</div>
		</div>
	);
};

export default Settings;
