import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Navbar() {
	return (
		<div className='navbar'>
			<Nav />
			<main>
				<Outlet />
			</main>
		</div>
	);
}
