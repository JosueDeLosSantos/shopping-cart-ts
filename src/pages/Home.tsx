import { Link } from "react-router-dom";
import heroImg from "/nitish-goswami.jpg";

export default function Home() {
	return (
		<div className='relative'>
			<img src={heroImg} className='h-[calc(100vh-60px)] w-screen relative' />
			<div className='pt-[16vh] w-[80%] md:w-[60%] text-center z-10 absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white'>
				<h1 className='text-2xl md:text-4xl font-bold pb-4'>
					Let your dreams become true
				</h1>
				<p className='pb-20 md:text-xl'>
					Shop the latest in men’s and women’s fashion, stunning jewelry, and
					cutting-edge electronics. Elevate your lifestyle with our exclusive
					collections.
				</p>
				<Link to='/Shop'>
					<button
						type='button'
						className='bg-blue-500 font-semibold py-2 px-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-800 md:text-lg'
					>
						SHOP NOW
					</button>
				</Link>
			</div>
		</div>
	);
}
