import { MdShoppingCart } from "react-icons/md";
import { Paper, Rating } from "@mui/material";
import { FiMinus, FiPlus } from "react-icons/fi";
import { AppDispatch } from "../app/store";
import { useDispatch } from "react-redux";
import { addAmount, addToCart, removeFromCart, ShopItem } from "../utils/shopSlice";

export default function ItemsSelection({ item }: { item: ShopItem }) {
	const dispatch: AppDispatch = useDispatch();

	function manualUpdate(value: number, itemId: number) {
		const payload = {
			amount: value,
			itemId: itemId
		};

		dispatch(addAmount(payload));
	}

	return (
		<Paper
			elevation={1}
			className='flex flex-col items-center justify-center p-4 m-4 text-center w-min'
		>
			<img
				className='mb-[3vw] object-contain max-w-[200px] h-1/2 mx-auto'
				src={`${item.image}`}
			/>
			<p className='mb-[1vw] text-xs md:text-sm font-semibold'>{item.title}</p>
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
					<div className='flex'>
						<button
							type='button'
							onClick={() => dispatch(removeFromCart(item.id))}
							className='flex items-center px-3 py-2.5 bg-slate-200 font-semibold'
						>
							<FiMinus size={16} />
						</button>
						<input
							className='max-w-[50px] text-center border outline-none border-slate-200'
							value={item.requests}
							onChange={(e) =>
								manualUpdate(Number(e.target.value), item.id)
							}
						/>
						<button
							type='button'
							onClick={() => dispatch(addToCart(item.id))}
							className='flex items-center px-3 py-2.5 bg-slate-200 font-semibold'
						>
							<FiPlus size={16} />
						</button>
					</div>
				)}
			</div>

			<span
				className={`text-red-500 text-xs ${
					item.requests > 9999 ? "opacity-100" : "opacity-0"
				}`}
			>
				Amount cannot exceed 9999
			</span>
		</Paper>
	);
}
