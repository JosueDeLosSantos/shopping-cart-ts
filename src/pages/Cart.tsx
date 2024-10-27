import { useSelector } from "react-redux";
import { RootState } from "../app/rootReducer";
import { Paper } from "@mui/material";
import { ShopItem } from "../utils/shopSlice";
import paymentMethods from "/payment-methods.png";

export default function Cart() {
	const items = useSelector((state: RootState) => state.fakeStoreItems);
	const cart = items.filter((item) => item.requests > 0);

	return (
		<div className='p-4'>
			<Paper className='p-8'>
				<h1 className='mb-12 text-2xl sm:text-3xl font-bold text-center'>
					Your cart
				</h1>
				<div className='flex gap-10 justify-between flex-col md:flex-row'>
					<div className='w-full md:w-[60%]'>
						{cart.map((item) => (
							<CartItem key={item.id} item={item} />
						))}
					</div>
					<div className='w-full md:w-[30%] flex flex-col gap-4 md:gap-8 items-center mx-auto'>
						<CheckOut cart={cart} />
					</div>
				</div>
			</Paper>
		</div>
	);
}

function CartItem({ item }: { item: ShopItem }) {
	const subTotal = item.price * item.requests;

	return (
		<div className='p-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full border-b text-sm'>
			<div className='md:col-span-2 font-semibold'>{item.title}</div>{" "}
			<div className='grid grid-cols-2 gap-4'>
				<div className='text-xs text-slate-500'>
					<span>Qty: </span>
					<span>{item.requests}</span>
				</div>
				<div className='font-semibold'>{`USD $${subTotal.toFixed(2)}`}</div>
			</div>
		</div>
	);
}

function CheckOut({ cart }: { cart: ShopItem[] }) {
	const total = cart.reduce((acc, item) => acc + item.price * item.requests, 0);
	return (
		<>
			<h1 className='my-4 font-bold text-lg md:text-xl'>{`Total: $${total.toFixed(
				2
			)}`}</h1>
			<div className='md:w-full w-[70%]'>
				<img className='object-contain' src={paymentMethods} />
			</div>
			<button
				type='button'
				className='flex items-center gap-1 px-3 py-2 rounded bg-green-700 text-white font-semibold'
			>
				<div>CHECKOUT</div>
			</button>
		</>
	);
}
