import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Navbar() {
	return (
		<div className='navbar'>
			<Nav />
			<main className='bg-slate-100 min-h-[calc(100vh-60px)]'>
				<Outlet />
			</main>
		</div>
	);
}
