import { useSelector } from "react-redux";
import { RootState } from "../app/rootReducer";
import ItemsSelection from "./ItemsSelection";

export default function Category({ category }: { category: string }) {
	const items = useSelector((state: RootState) => state.fakeStoreItems);

	if (category === "all") {
		return (
			<div className='flex flex-wrap justify-center w-full my-[5vh]'>
				{items.map((item) => (
					<ItemsSelection key={`${item.id}`} item={item} />
				))}
			</div>
		);
	} else {
		return (
			<div className='flex flex-wrap justify-center w-full my-[5vh]'>
				{items
					.filter((item) => item.category === category)
					.map((item) => (
						<ItemsSelection key={`${item.id}`} item={item} />
					))}
			</div>
		);
	}
}
