import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./app/Router.tsx";
import { ShopProvider } from "./Contexts/Cartcontext.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ShopProvider>
			<Router />
		</ShopProvider>
	</StrictMode>
);
