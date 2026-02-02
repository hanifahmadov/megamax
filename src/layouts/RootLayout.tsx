import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<div
			className='root-layout 
						h-svh w-svw p-2
						flex justify-center items-center
						fixed inset-0 
						bg-white
						'
		>
			<div
				className='root-layout-outlet 
							flex justify-center items-center 
							w-full h-full md:max-w-5xl
						  bg-neutral-50
						   rounded-lg'
			>
				<Outlet />
			</div>
		</div>
	);
};

export default RootLayout;
