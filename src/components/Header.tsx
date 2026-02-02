const Header = () => {
	return (
		<div
			className='3by3_header h-full w-full flex gap-10
                            flex-col justify-center items-center
                            '
		>
			{/* Headline Tic Tac Toe */}
			<div className='tictactoe_header flex gap-2 text-2xl md:text-4xl font-medium'>
				<div className='border-2 border-black/20 px-5 py-2 rounded'>Tic</div>
				<div className='border-2 border-black/20 px-5 py-2 rounded'>Tac </div>
				<div className='border-2 border-black/20 px-5 py-2 rounded'>Toe</div>
			</div>
		</div>
	);
};

export default Header;
