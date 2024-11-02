import { FaGithub } from "react-icons/fa";

const About = () => {
	return (
		<main className='text-center p-10 flex flex-col justify-between h-[50vh] gap-5'>
			<h1 className='text-3xl font-bold'>Disclaimer</h1>
			<p>This is a fictional store and none of the products displayed here exist</p>
			<p>
				The products information and images are provided by{" "}
				<a
					className='hover:underline text-blue-700'
					href='https://fakestoreapi.com/'
				>
					Fake Store API
				</a>
				.
			</p>
			<p>
				The home page background photo was provided by Nitish Goswami on{" "}
				<a className='hover:underline text-blue-700' href='https://unsplash.com/'>
					Unsplash
				</a>
			</p>
			<a href='https://github.com/JosueDeLosSantos' className='flex gap-1 mx-auto'>
				<FaGithub className='size-5' />
				<p className='hover:underline'>Josue De los santos 2024</p>
			</a>
		</main>
	);
};

export default About;
