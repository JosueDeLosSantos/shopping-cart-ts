import { MdShoppingCart } from "react-icons/md";
import { Paper, Rating } from "@mui/material";
import { AppDispatch } from "../app/store";
import { useDispatch } from "react-redux";
import { addToCart, ShopItem } from "../utils/shopSlice";
import { IoCheckmark } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function ItemsSelection({ item }: { item: ShopItem }) {
	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<Paper
			onClick={() => navigate(`/cart/${item.id}`)}
			elevation={1}
			className='flex flex-col items-center justify-center p-4 m-4 text-center w-min cursor-pointer'
		>
			<img
				className='mb-[3vw] object-contain max-w-[200px] h-1/2 mx-auto'
				src={`${item.image}`}
				alt="item's image"
			/>
			<p className='mb-[1vw] text-xs md:text-sm font-semibold'>{item.title}</p>
			<p className='text-xs text-slate-500'>Price per unit</p>
			<p className='text-base md:text-2xl font-bold'>{`$ ${item.price.toFixed(
				2
			)}`}</p>
			<div className='flex content-center'>
				<Rating
					defaultValue={item.rating.rate}
					precision={item.rating.rate}
					size='small'
					readOnly
				/>
				<span className='text-xs ml-1 text-slate-500'>{`(${item.rating.count})`}</span>
			</div>
			{/* Add or Remove items from cart */}
			<div className='mt-4'>
				{item.requests === 0 && (
					<button
						type='button'
						className='flex items-center text-sm gap-1 px-3 py-2 rounded bg-green-700 text-white font-semibold'
						onClick={() => dispatch(addToCart(item.id))}
					>
						<MdShoppingCart size={16} />
						<div>ADD TO CART</div>
					</button>
				)}
				{item.requests > 0 && (
					<div className='flex border-green-500 rounded text-green-600 border-2 py-1 px-2'>
						Added <IoCheckmark size={16} />
					</div>
				)}
			</div>
		</Paper>
	);
}
