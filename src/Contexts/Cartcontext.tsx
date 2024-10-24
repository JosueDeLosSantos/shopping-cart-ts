import { createContext, useContext, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

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

type ShopContextType = {
	items: ShopItem[];
	addToCart: (itemId: number) => void;
	removeFromCart: (itemId: number) => void;
};

const ShopContext = createContext<ShopContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useShopContext() {
	const value = useContext(ShopContext);

	if (value === null) throw Error("Database Error");

	return value;
}

type ShopProviderProps = {
	children: React.ReactNode;
};

export function ShopProvider({ children }: ShopProviderProps) {
	const [items, setItems] = useState<ShopItem[]>([]);
	function addToCart(itemId: number) {
		const item = items.find((item) => item.id === itemId);
		if (item) {
			item.requests++;
		}
	}
	function removeFromCart(itemId: number) {
		const item = items.find((item) => item.id === itemId);
		if (item) {
			if (item.requests > 0) {
				item.requests--;
			}
		}
	}

	useEffect(() => {
		(async () => {
			try {
				// get all items
				const response = await axios.get("https://fakestoreapi.com/products");
				// adds additional property to all items
				const data = response.data.map((item: ShopItem) => {
					item.requests = 0;
					return item;
				});
				// set items
				setItems(data);
			} catch (error) {
				const axiosError = error as AxiosError;
				if (axiosError) {
					setItems([]);
				}
			}
		})();
	}, []);

	return (
		<ShopContext.Provider value={{ items, addToCart, removeFromCart }}>
			{children}
		</ShopContext.Provider>
	);
}
