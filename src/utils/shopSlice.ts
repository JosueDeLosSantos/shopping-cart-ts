import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ShopItem = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	requests: number;
	rating: {
		rate: number;
		count: number;
	};
};

const initialState: ShopItem[] = [];

const storeSlice = createSlice({
	name: "fakeStoreItems",
	initialState,
	reducers: {
		feedStore(_, action: PayloadAction<ShopItem[]>) {
			return action.payload;
		},
		addToCart(state, action: PayloadAction<number>) {
			const item = state.find((item) => item.id === action.payload);
			if (item) {
				item.requests++;
			}
		},
		removeFromCart(state, action: PayloadAction<number>) {
			const item = state.find((item) => item.id === action.payload);
			if (item) {
				if (item.requests > 0) {
					item.requests--;
				}
			}
		},
		addAmount(state, action: PayloadAction<{ amount: number; itemId: number }>) {
			const item = state.find((item) => item.id === action.payload.itemId);
			if (item) {
				if (action.payload.amount > 0) {
					item.requests = action.payload.amount;
				} else {
					item.requests = 0;
				}
			}
		}
	}
});

export const { feedStore, addToCart, removeFromCart, addAmount } = storeSlice.actions;

export default storeSlice.reducer;
