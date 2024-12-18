import { Link, useNavigate } from "react-router-dom";
import useWindowSize from "../hooks/windowSize";
import { MdHome, MdMenu, MdShoppingBag, MdShoppingCart } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../app/rootReducer";

export default function Nav() {
	const items = useSelector((state: RootState) => state.fakeStoreItems);
	const cart = items.filter((item) => item.requests > 0);
	const windowSize = useWindowSize();
	const navigate = useNavigate();
	const isMobile = windowSize.windowWidth < 768;
	const [isNavOpen, setIsNavOpen] = useState(false);

	const NavShow = ({ children }: { children: JSX.Element }) => {
		return (
			<motion.div
				initial={{ opacity: 0, x: 100 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				{children}
			</motion.div>
		);
	};

	return (
		<header className='sticky top-0 z-50'>
			<nav className='w-full text-white bg-black px-8 py-4 flex flex-row justify-end text-lg'>
				<div
					onClick={() => {
						if (isNavOpen) {
							setIsNavOpen(false);
							navigate("/");
						} else {
							navigate("/");
						}
					}}
					className={`font-Anton cursor-pointer ${
						isNavOpen && isMobile ? "ml-auto text-xl" : "mr-auto"
					}`}
				>
					Dreams Depot
				</div>

				{isMobile && !isNavOpen && (
					<div
						className='relative'
						onClick={() => {
							setIsNavOpen(true);
							window.scrollTo(0, 0); // scroll to top of page
						}}
					>
						<MdMenu className='z-50' size={24} />
						{cart.length > 0 && location.pathname !== "/cart" && (
							<div className='absolute text-white top-[-3px] left-4 text-xs bg-blue-500 min-w-4 w-fit h-4 rounded-full flex justify-center items-center'>
								{cart.length}
							</div>
						)}
					</div>
				)}

				{!isMobile && (
					<div className='flex flex-row gap-8'>
						<Link
							className={`${
								location.pathname === "/" &&
								"text-red-300 underline underline-offset-8"
							}`}
							to='/'
						>
							Home
						</Link>
						<Link
							className={`${
								location.pathname === "/shop" &&
								"text-red-300 underline underline-offset-8"
							}`}
							to='/shop'
						>
							Shop
						</Link>
						<Link
							className={`relative ${
								location.pathname === "/cart" &&
								"text-red-300 underline underline-offset-8"
							}`}
							to='/cart'
						>
							{cart.length > 0 && location.pathname !== "/cart" && (
								<div className='absolute text-white top-[-3px] left-8 text-xs bg-blue-500 min-w-4 w-fit h-4 rounded-full flex justify-center items-center'>
									{cart.length}
								</div>
							)}
							<div>Cart</div>
						</Link>
						<Link
							className={`${
								location.pathname === "/about" &&
								"text-red-300 underline underline-offset-8"
							}`}
							to='/about'
						>
							About
						</Link>
					</div>
				)}
			</nav>

			{/* Sidenav for small screens */}

			<nav
				className={`w-screen h-screen absolute z-50  ${
					isNavOpen && isMobile ? "bg-black/50" : "hidden"
				}`}
				onClick={() => {
					setIsNavOpen(false);
				}}
			>
				<NavShow>
					<div className='min-w-[250px] w-6/12 h-screen bg-black absolute top-0 right-0 p-8'>
						<div className='flex flex-col gap-8'>
							<Link
								className={`${
									location.pathname === "/"
										? "text-red-300 flex gap-2"
										: "text-white flex gap-2"
								}`}
								to='/'
							>
								<MdHome size={21} />
								Home
							</Link>
							<Link
								className={`${
									location.pathname === "/shop"
										? "text-red-300 flex gap-2"
										: "text-white flex gap-2"
								}`}
								to='/shop'
							>
								<MdShoppingBag size={21} />
								Shop
							</Link>
							<Link
								className={`${
									location.pathname === "/cart"
										? "text-red-300 flex gap-2"
										: "text-white flex gap-2"
								}`}
								to='/cart'
							>
								<div className='relative'>
									{cart.length > 0 && location.pathname !== "/cart" && (
										<div className='absolute text-white top-[-10px] left-3 text-xs bg-blue-500 min-w-4 w-fit h-4 rounded-full flex justify-center items-center'>
											{cart.length}
										</div>
									)}
									<MdShoppingCart size={21} />
								</div>
								Cart
							</Link>
							<Link
								className={`${
									location.pathname === "/about"
										? "text-red-300 flex gap-2"
										: "text-white flex gap-2"
								}`}
								to='/about'
							>
								<IoMdInformationCircle size={21} />
								About
							</Link>
						</div>
					</div>
				</NavShow>
			</nav>
		</header>
	);
}
