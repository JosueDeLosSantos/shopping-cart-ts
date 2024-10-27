import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import About from "../pages/About";
import SelectedItem from "../pages/SelectedItem";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "shop",
				element: <Shop />
			},
			{
				path: "cart",
				element: <Cart />
			},
			{
				path: "cart/:id",
				element: <SelectedItem />
			},
			{
				path: "about",
				element: <About />
			}
		]
	}
]);

export default function Router() {
	return <RouterProvider router={router} />;
}
