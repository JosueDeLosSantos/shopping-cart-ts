import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./app/Router.tsx";
// import { ShopProvider } from "./Contexts/Cartcontext.tsx";
import { Provider } from "react-redux";
import store from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<Router />
		</Provider>
	</StrictMode>
);
