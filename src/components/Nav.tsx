import { Link, useNavigate } from "react-router-dom";
import useWindowSize from "../hooks/windowSize";
import { MdHome, MdMenu, MdShoppingBag, MdShoppingCart } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
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
					className={`${
						isNavOpen && isMobile
							? "ml-auto font-Anton text-xl"
							: "mr-auto font-Anton"
					}`}
				>
					Dreams Depot
				</div>

				{isMobile && !isNavOpen && (
					<MdMenu
						className='z-50'
						size={24}
						onClick={() => {
							setIsNavOpen(true);
						}}
					/>
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
							className={`${
								location.pathname === "/cart" &&
								"text-red-300 underline underline-offset-8"
							}`}
							to='/cart'
						>
							Cart
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
								<MdShoppingCart size={21} />
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
