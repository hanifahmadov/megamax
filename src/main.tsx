import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { RecoilRoot } from "recoil";
import { StyleSheetManager } from "styled-components";

import "./index.css";
import { router } from "./helpers/routes";

const CustomStyleSheetManager = ({ children }: { children: React.ReactNode }) => (
	<StyleSheetManager shouldForwardProp={(prop) => prop !== "comp"}>{children}</StyleSheetManager>
);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<CustomStyleSheetManager>
			<RecoilRoot>
				<RouterProvider router={router} />
			</RecoilRoot>
		</CustomStyleSheetManager>
	</StrictMode>,
);
