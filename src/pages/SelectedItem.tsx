import { Paper, Rating } from "@mui/material";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";
import { addAmount, addToCart, removeFromCart, ShopItem } from "../utils/shopSlice";
import { AppDispatch } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/rootReducer";
import { Link } from "react-router-dom";

export default function SelectedItem() {
	const items = useSelector((state: RootState) => state.fakeStoreItems);
	const dispatch: AppDispatch = useDispatch();
	const path = location.pathname.split("/");
	const id = Number(path[path.length - 1]);
	const item = items.find((item) => item.id === id) as ShopItem;

	function manualUpdate(value: number, itemId: number) {
		const payload = {
			amount: value,
			itemId: itemId
		};

		dispatch(addAmount(payload));
	}

	return (
		<div className='py-2 sm:p-4'>
			<Paper elevation={1} className='p-4 mx-auto text-center w-11/12'>
				<h1 className='mb-8 text-[5vw] sm:text-3xl font-bold'>{item.title}</h1>
				<div className='flex flex-col md:flex-row'>
					<div className='flex-1 p-4 sm:p-8 w-10/12 md:w-full mx-auto md:mr-16'>
						<img className='object-contain w-full' src={`${item.image}`} />
					</div>

					<div className='flex-1 p-8 flex flex-col items-center md:items-start'>
						<h2 className='font-bold mb-4 text-lg md:text-xl'>Description</h2>
						<p className='text-center text-sm md:text-base md:text-start mb-4'>
							{item.description}
						</p>
						<p className='text-slate-400 mb-1 text-sm md:text-base'>
							Price per unit
						</p>
						<p className='md:text-3xl text-2xl font-bold mb-2'>{`$ ${item.price}`}</p>
						<div className='flex content-center'>
							<Rating
								defaultValue={item.rating.rate}
								precision={item.rating.rate}
								size='medium'
								readOnly
							/>
							<span className='ml-1 text-slate-400'>{`(${item.rating.count})`}</span>
						</div>
						{/* Add or Remove items from cart */}
						<div className='mt-8'>
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
								<>
									<div className='flex'>
										<button
											type='button'
											onClick={() =>
												dispatch(removeFromCart(item.id))
											}
											className='flex items-center px-3 py-2.5 bg-slate-200 font-semibold'
										>
											<FiMinus size={16} />
										</button>
										<input
											className='max-w-[50px] text-center border outline-none border-slate-200'
											value={item.requests}
											onChange={(e) =>
												manualUpdate(
													Number(e.target.value),
													item.id
												)
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
									<div className='mt-4'>
										<Link
											to='/cart'
											className='w-fit flex items-center text-sm gap-1 px-3 py-2 rounded bg-blue-500 text-white font-semibold'
										>
											<MdShoppingCart size={16} />
											<div>CART</div>
										</Link>
									</div>
								</>
							)}
						</div>

						<span
							className={`text-red-500 text-xs ${
								item.requests > 9999 ? "opacity-100" : "opacity-0"
							}`}
						>
							Amount cannot exceed 9999
						</span>
					</div>
				</div>
			</Paper>
		</div>
	);
}
