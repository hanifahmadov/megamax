import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../layouts/RootLayout";
import App from "../App";

export const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <App />,
			},
		],
	},
	{
		path: "/404",
		element: <Navigate to='/' replace />,
	},
	{
		path: "*",
		element: <Navigate to='/' replace />,
	},
]);
