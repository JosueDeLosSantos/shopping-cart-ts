import { Link } from "react-router-dom";
import useWindowSize from "../hooks/windowSize";
import { MdMenu } from "react-icons/md";

export default function Nav() {
	const windowSize = useWindowSize();
	const isMobile = windowSize.windowWidth < 768;

	return (
		<nav className='w-full text-white bg-black px-8 py-4 flex flex-row justify-end text-lg'>
			<div className='mr-auto font-Anton'>Dreams Depot</div>

			{isMobile && (
				<MdMenu
					size={24}
					onClick={() => {
						console.log("clicked");
					}}
				/>
			)}

			{!isMobile && (
				<div className='flex flex-row gap-8'>
					<Link to='/'>Home</Link>
					<Link to='/shop'>Shop</Link>
					<Link to='/cart'>Cart</Link>
					<Link to='/about'>About</Link>
				</div>
			)}
		</nav>
	);
}
