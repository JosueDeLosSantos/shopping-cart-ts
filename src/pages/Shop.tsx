import { Paper, Rating } from "@mui/material";
import { useShopContext } from "../Contexts/Cartcontext";

export default function Shop() {
	const { items, addToCart, removeFromCart } = useShopContext();

	console.log(items);

	return (
		<div className='px-4 py-4'>
			<h2 className='text-center text-xl md:text-3xl font-bold'>All</h2>
			<div className='flex flex-wrap justify-center w-full my-[5vh]'>
				{items.map((item) => (
					<Paper
						elevation={1}
						className='flex flex-col items-center justify-center itemCard p-4 m-4 text-center w-min'
						key={`${item.id}`}
					>
						<img
							className='mb-[3vw] object-contain max-w-[200px] h-1/2 mx-auto'
							src={`${item.image}`}
						/>
						<p className='mb-[1vw] text-xs md:text-sm font-semibold'>
							{item.title}
						</p>
						<p className='text-xs text-slate-400'>Price per unit</p>
						<p className='text-base md:text-2xl font-bold'>{`$ ${item.price}`}</p>
						<div className='flex content-center'>
							<Rating
								defaultValue={item.rating.rate}
								precision={item.rating.rate}
								size='small'
								readOnly
							/>
							<span className='text-xs ml-1 text-slate-400'>{`(${item.rating.count})`}</span>
						</div>
					</Paper>
				))}
			</div>
		</div>
	);
}
