import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { AppDispatch } from "../app/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios, { AxiosError } from "axios";
import { feedStore, ShopItem } from "../utils/shopSlice";

export default function Navbar() {
	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		(async () => {
			try {
				// get all items
				const response = await axios.get("https://fakestoreapi.com/products");
				// adds additional property to all items
				const data = response.data.map((item: ShopItem) => {
					item.requests = 0;
					return item;
				});
				// set items
				dispatch(feedStore(data));
			} catch (error) {
				const axiosError = error as AxiosError;
				if (axiosError) {
					dispatch(feedStore([]));
				}
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className='navbar'>
			<Nav />
			<main className='bg-slate-100 min-h-[calc(100vh-60px)]'>
				<Outlet />
			</main>
		</div>
	);
}
